import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { XOOSMicroappBridge, XOOSMicroappElement } from "@xoos/contracts";
import styles from "@/styles/index.css?inline";
import App from "@/app/App";
import { BridgeProvider } from "./runtime";
import { microappConfig } from "../../microapp.config";

export class XoosEditApprovalElement
  extends HTMLElement
  implements XOOSMicroappElement
{
  xoos?: XOOSMicroappBridge;
  xoosProps?: Record<string, unknown>;

  private root: Root | null = null;
  private mountPoint: HTMLDivElement | null = null;

  connectedCallback() {
    if (this.root) return;

    const shadow = this.shadowRoot ?? this.attachShadow({ mode: "open" });

    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    shadow.appendChild(styleElement);

    const mount = document.createElement("div");
    mount.setAttribute("data-xoos-microapp", microappConfig.microappKey);
    mount.style.display = "contents";
    shadow.appendChild(mount);
    this.mountPoint = mount;

    if (!this.xoos) {
      mount.textContent = "XOOS runtime bridge missing.";
      return;
    }

    this.root = createRoot(mount);
    this.root.render(
      createElement(BridgeProvider, {
        bridge: this.xoos,
        props: this.xoosProps ?? {},
        children: createElement(App),
      }),
    );
  }

  disconnectedCallback() {
    this.root?.unmount();
    this.root = null;
    this.mountPoint?.remove();
    this.mountPoint = null;
  }
}

if (!customElements.get(microappConfig.elementName)) {
  customElements.define(microappConfig.elementName, XoosEditApprovalElement);
}

export { microappConfig };
export default XoosEditApprovalElement;
