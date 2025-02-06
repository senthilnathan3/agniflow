"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface InputElementProps extends HTMLAgniflowProps<"div"> {}

export const InputElement = chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    color: "fg.subtle",
    height: "full",
    fontSize: "sm",
    px: "3",
  },
  variants: {
    placement: {
      start: {
        insetInlineStart: "0",
      },
      end: {
        insetInlineEnd: "0",
      },
    },
  },
})
