import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { XOOSMicroappBridge } from "@xoos/contracts";
import { createXOOSSupabaseClient } from "@xoos/data-client";

interface RuntimeValue {
  bridge: XOOSMicroappBridge;
  props: Record<string, unknown>;
}

const RuntimeContext = createContext<RuntimeValue | null>(null);

export function BridgeProvider({
  bridge,
  props = {},
  children,
}: {
  bridge: XOOSMicroappBridge;
  props?: Record<string, unknown>;
  children: ReactNode;
}) {
  return (
    <RuntimeContext.Provider value={{ bridge, props }}>
      {children}
    </RuntimeContext.Provider>
  );
}

export function useOptionalBridgeRuntime(): RuntimeValue | null {
  return useContext(RuntimeContext);
}

export function useXoRuntime() {
  const runtime = useOptionalBridgeRuntime();

  return useMemo(() => {
    if (runtime) {
      const runtimeUser = runtime.bridge.context.user as
        typeof runtime.bridge.context.user & {
          email?: string | null;
        };

      return {
        bridge: runtime.bridge,
        props: runtime.props,
        userId: runtime.bridge.context.user.id,
        email:
          runtimeUser.email ??
          (typeof runtime.props.email === "string"
            ? runtime.props.email
            : ""),
        tenantId: runtime.bridge.context.tenant.id,
        templateId:
          typeof runtime.props.templateId === "string"
            ? runtime.props.templateId
            : typeof runtime.props.template_id === "string"
              ? runtime.props.template_id
              : "",
        scopes: runtime.bridge.context.scopes,
        hasScope: (scope: string) =>
          runtime.bridge.context.scopes.includes(scope),
        isRuntimeHosted: true,
      };
    }

    return {
      bridge: null,
      props: {},
      userId:
        (import.meta.env.VITE_XOOS_PREVIEW_USER_ID as string | undefined)
          ?.trim() || "",
      email:
        (import.meta.env.VITE_XOOS_PREVIEW_EMAIL as string | undefined)
          ?.trim() || "",
      tenantId:
        (import.meta.env.VITE_XOOS_PREVIEW_TENANT_ID as string | undefined)
          ?.trim() || "",
      templateId:
        (import.meta.env.VITE_XOOS_PREVIEW_TEMPLATE_ID as string | undefined)
          ?.trim() || "",
      scopes: [] as string[],
      hasScope: () => false,
      isRuntimeHosted: false,
    };
  }, [runtime]);
}

const clientCache = new WeakMap<
  XOOSMicroappBridge,
  Map<string, Promise<SupabaseClient>>
>();

function resolveDatasourceKey(
  props: Record<string, unknown>,
): string {
  const supplied =
    typeof props.datasourceKey === "string"
      ? props.datasourceKey.trim()
      : typeof props.datasource_key === "string"
        ? props.datasource_key.trim()
        : "";

  if (supplied) return supplied;

  throw new Error(
    "BLOCKED_DATASOURCE_MAPPING: XOOS datasourceKey was not supplied by the runtime/control-plane mapping.",
  );
}

async function getRuntimeClient(
  bridge: XOOSMicroappBridge,
  props: Record<string, unknown>,
): Promise<SupabaseClient> {
  const datasourceKey = resolveDatasourceKey(props);

  let bridgeClients = clientCache.get(bridge);

  if (!bridgeClients) {
    bridgeClients = new Map();
    clientCache.set(bridge, bridgeClients);
  }

  let cached = bridgeClients.get(datasourceKey);

  if (!cached) {
    cached = createXOOSSupabaseClient({
      projectKey: datasourceKey,
      bridge: bridge.data,
    });

    bridgeClients.set(datasourceKey, cached);
  }

  return cached;
}

export function useEditApprovalDataClient() {
  const runtime = useOptionalBridgeRuntime();

  const [client, setClient] =
    useState<SupabaseClient | null>(null);

  const [error, setError] =
    useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    setClient(null);
    setError(null);

    if (!runtime) {
      if (import.meta.env.MODE === "xoos-microapp") {
        setError(
          new Error(
            "XOOS Runtime bridge is required for the Native ESM microapp.",
          ),
        );

        return () => {
          cancelled = true;
        };
      }

      import("@/integrations/supabase/client")
        .then(({ supabase }) => {
          if (!cancelled) {
            setClient(supabase);
          }
        })
        .catch((reason) => {
          if (!cancelled) {
            setError(
              reason instanceof Error
                ? reason
                : new Error(String(reason)),
            );
          }
        });

      return () => {
        cancelled = true;
      };
    }

    getRuntimeClient(
      runtime.bridge,
      runtime.props,
    )
      .then((resolved) => {
        if (!cancelled) {
          setClient(resolved);
        }
      })
      .catch((reason) => {
        if (!cancelled) {
          setError(
            reason instanceof Error
              ? reason
              : new Error(String(reason)),
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [runtime]);

  return {
    client,
    error,
    isReady: Boolean(client),
  };
}
