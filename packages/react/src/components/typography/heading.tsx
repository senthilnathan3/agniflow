"use client"

import type { Assign } from "@ark-ui/react"
import {
  type HTMLAgniflowProps,
  type RecipeProps,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "heading",
})

export interface HeadingProps
  extends Assign<HTMLAgniflowProps<"h2">, RecipeProps<"heading">> {}

export const Heading = withContext<HTMLHeadingElement, HeadingProps>("h2")

export const HeadingPropsProvider =
  PropsProvider as React.Provider<HeadingProps>
