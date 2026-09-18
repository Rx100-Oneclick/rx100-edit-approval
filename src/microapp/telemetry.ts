import type { XOOSMicroappBridge } from "@xoos/contracts";
import { microappConfig } from "../../microapp.config";

type Attributes = Record<string, string | number | boolean | null>;

export function track(
  bridge: XOOSMicroappBridge | null,
  event: string,
  attributes?: Attributes,
) {
  if (!bridge) return;
  void bridge.telemetry
    .track(event, attributes, microappConfig.microappKey)
    .catch(() => {
      // Telemetry must never break the business flow.
    });
}

export function reportError(
  bridge: XOOSMicroappBridge | null,
  event: string,
  error: unknown,
  attributes?: Attributes,
) {
  const message = error instanceof Error ? error.message : String(error);
  track(bridge, event, { ...attributes, error: message, severity: "error" });
}
