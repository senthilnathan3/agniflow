import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface LoaderOverlayProps extends HTMLAgniflowProps<"div"> {}

export const LoaderOverlay = chakra("div", {
  base: {
    pos: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSize: "full",
    gap: "2",
  },
})
