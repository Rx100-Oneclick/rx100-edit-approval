import { createElement, Fragment } from "react";
import { Toaster } from "sonner";
import {
  defineXOOSMicroapp,
  useXOOS,
  useXOOSPortalRoot,
} from "@xoos/microapp-adapter";
import styles from "@/styles/index.css?inline";
import App from "@/app/App";
import { BridgeProvider } from "./runtime";
import { microappConfig } from "../../microapp.config";

function resolveNavigationTarget(portalRoot: HTMLElement | null): HTMLElement | null {
  if (!portalRoot) return null;

  const rootNode = portalRoot.getRootNode();
  if (rootNode instanceof ShadowRoot && rootNode.host instanceof HTMLElement) {
    return rootNode.host.parentElement;
  }

  return null;
}

function EditApprovalAdapterRoot(props: Record<string, unknown>) {
  const bridge = useXOOS();
  const portalRoot = useXOOSPortalRoot();
  const navigationTarget = resolveNavigationTarget(portalRoot);

  return createElement(
    BridgeProvider,
    {
      bridge,
      props,
      portalRoot,
      navigationTarget,
    },
    createElement(
      Fragment,
      null,
      createElement(App),
      createElement(Toaster, { position: "top-right", richColors: true }),
    ),
  );
}

defineXOOSMicroapp({
  id: microappConfig.microappKey,
  element: microappConfig.elementName,
  App: EditApprovalAdapterRoot,
  styles,
  shadowDom: true,
});

export { microappConfig };
export default EditApprovalAdapterRoot;
