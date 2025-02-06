"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface QuoteProps extends HTMLAgniflowProps<"q"> {}

export const Quote = chakra("q", {
  base: {
    fontWeight: "bold",
    lineHeight: "1.2",
  },
})
