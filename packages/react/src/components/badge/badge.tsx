"use client"

import {
  type HTMLAgniflowProps,
  type RecipeProps,
  type UnstyledProp,
  createRecipeContext,
} from "../../styled-system"

export const { PropsProvider, withContext } = createRecipeContext({
  key: "badge",
})

export interface BadgeBaseProps extends RecipeProps<"badge">, UnstyledProp {}

export interface BadgeProps extends HTMLAgniflowProps<"span", BadgeBaseProps> {}

export const Badge = withContext<HTMLSpanElement, BadgeProps>("span")

export const BadgePropsProvider =
  PropsProvider as React.Provider<BadgeBaseProps>
