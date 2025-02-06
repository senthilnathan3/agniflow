"use client"

import {
  type HTMLAgniflowProps,
  type RecipeProps,
  type UnstyledProp,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "spinner",
})

export interface SpinnerProps
  extends HTMLAgniflowProps<"span">,
    UnstyledProp,
    RecipeProps<"spinner"> {}

export const Spinner = withContext<HTMLSpanElement, SpinnerProps>("span")

export const SpinnerPropsProvider =
  PropsProvider as React.Provider<SpinnerProps>
