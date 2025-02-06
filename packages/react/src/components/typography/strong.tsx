"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface StrongProps extends HTMLAgniflowProps<"em"> {}

export const Strong = chakra("strong", {
  base: { fontWeight: "semibold" },
})
