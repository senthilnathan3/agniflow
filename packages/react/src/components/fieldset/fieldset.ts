"use client"

import type { Assign } from "@ark-ui/react"
import { ark } from "@ark-ui/react/factory"
import { Fieldset } from "@ark-ui/react/fieldset"
import {
  type HTMLAgniflowProps,
  type SlotRecipeProps,
  createSlotRecipeContext,
} from "../../styled-system"

const { withProvider, withContext } = createSlotRecipeContext({
  key: "fieldset",
})

interface FieldsetRootBaseProps
  extends Assign<Fieldset.RootBaseProps, SlotRecipeProps<"fieldset">> {}

export interface FieldsetRootProps
  extends HTMLAgniflowProps<"fieldset", FieldsetRootBaseProps> {}

export const FieldsetRoot = withProvider<
  HTMLFieldSetElement,
  FieldsetRootProps
>(Fieldset.Root, "root")

export interface FieldsetErrorTextProps
  extends HTMLAgniflowProps<"span", Fieldset.ErrorTextBaseProps> {}

export const FieldsetErrorText = withContext<
  HTMLSpanElement,
  FieldsetErrorTextProps
>(Fieldset.ErrorText, "errorText")

export interface FieldsetHelperTextProps
  extends HTMLAgniflowProps<"span", Fieldset.HelperTextBaseProps> {}

export const FieldsetHelperText = withContext<
  HTMLSpanElement,
  FieldsetHelperTextProps
>(Fieldset.HelperText, "helperText")

export interface FieldsetLegendProps
  extends HTMLAgniflowProps<"legend", Fieldset.LegendBaseProps> {}

export const FieldsetLegend = withContext<
  HTMLLegendElement,
  FieldsetLegendProps
>(Fieldset.Legend, "legend")

export interface FieldsetContentProps extends HTMLAgniflowProps<"div"> {}

export const FieldsetContent = withContext<
  HTMLDivElement,
  FieldsetContentProps
>(ark.div, "content")

export const FieldsetContext = Fieldset.Context
