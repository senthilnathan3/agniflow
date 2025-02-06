"use client"

import {
  type HTMLAgniflowProps,
  type RecipeProps,
  type UnstyledProp,
  createRecipeContext,
} from "../../styled-system"

const { withContext, PropsProvider } = createRecipeContext({
  key: "code",
})

export interface CodeBaseProps extends RecipeProps<"code">, UnstyledProp {}

export interface CodeProps extends HTMLAgniflowProps<"code", CodeBaseProps> {}

export const Code = withContext<HTMLElement, CodeProps>("code")

export const CodePropsProvider = PropsProvider as React.Provider<CodeBaseProps>
