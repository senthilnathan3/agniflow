"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface StickyProps extends HTMLAgniflowProps<"div"> {}

export const Sticky = chakra("div", {
  base: {
    position: "sticky",
    top: 0,
  },
})

Sticky.displayName = "Sticky"
