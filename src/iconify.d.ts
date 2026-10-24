import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon?: string;
        widht?: string;
        height?: string;
      };
    }
  }
}
