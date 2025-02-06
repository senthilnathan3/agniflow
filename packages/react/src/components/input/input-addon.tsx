"use client"

import { forwardRef } from "react"
import {
  EMPTY_SLOT_STYLES,
  type HTMLAgniflowProps,
  type RecipeProps,
  type UnstyledProp,
  chakra,
  useRecipe,
} from "../../styled-system"

export interface InputAddonProps
  extends HTMLAgniflowProps<"div">,
    RecipeProps<"inputAddon">,
    UnstyledProp {}

export const InputAddon = forwardRef<HTMLDivElement, InputAddonProps>(
  function InputAddon({ unstyled, ...props }, ref) {
    const recipe = useRecipe({ key: "inputAddon", recipe: props.recipe })
    const [variantProps, localProps] = recipe.splitVariantProps(props)
    const styles = unstyled ? EMPTY_SLOT_STYLES : recipe(variantProps)
    return <chakra.div ref={ref} {...localProps} css={[styles, props.css]} />
  },
)
