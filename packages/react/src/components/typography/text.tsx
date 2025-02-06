"use client"

import type { Assign } from "@ark-ui/react"
import {
  type HTMLAgniflowProps,
  type RecipeProps,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "text",
})

export interface TextProps
  extends Assign<HTMLAgniflowProps<"p">, RecipeProps<"text">> {}

export const Text = withContext<HTMLParagraphElement, TextProps>("p")

export const TextPropsProvider = PropsProvider as React.Provider<TextProps>
