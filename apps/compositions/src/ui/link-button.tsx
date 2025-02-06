"use client"

import type { HTMLAgniflowProps, RecipeProps } from "@agniflow-ui/react"
import { createRecipeContext } from "@agniflow-ui/react"

export interface LinkButtonProps
  extends HTMLAgniflowProps<"a", RecipeProps<"button">> {}

const { withContext } = createRecipeContext({ key: "button" })

// Replace "a" with your framework's link component
export const LinkButton = withContext<HTMLAnchorElement, LinkButtonProps>("a")
