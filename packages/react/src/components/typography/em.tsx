"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface EmProps extends HTMLAgniflowProps<"em"> {}

export const Em = chakra("em", {
  base: {
    fontStyle: "italic",
  },
})
