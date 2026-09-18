import { useXoRuntime } from "@/microapp/runtime";

interface AuthContext {
  userId: string;
  email: string;
  tenantId: string;
  templateId: string;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  bridge: ReturnType<typeof useXoRuntime>["bridge"];
}

export function useAuthFromParent(): AuthContext {
  const runtime = useXoRuntime();

  const missingContext =
    !runtime.userId || !runtime.tenantId || !runtime.templateId;

  return {
    userId: runtime.userId,
    email: runtime.email,
    tenantId: runtime.tenantId,
    templateId: runtime.templateId,
    isAuthenticated: !missingContext,
    isLoading: false,
    error: missingContext
      ? "Missing XOOS runtime identity or template context"
      : null,
    bridge: runtime.bridge,
  };
}
