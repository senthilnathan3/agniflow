"use client"

import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface StackSeparatorProps extends HTMLAgniflowProps<"div"> {}

export const StackSeparator = chakra("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto",
  },
})

StackSeparator.displayName = "StackSeparator"
