"use client"

import type { Assign } from "@ark-ui/react"
import { Toggle as ArkToggle } from "@ark-ui/react/toggle"
import {
  type HTMLAgniflowProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useToggleStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "toggle" })

export { useToggleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleRootProviderBaseProps
  extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>,
    UnstyledProp {}

export interface ToggleRootProviderProps
  extends HTMLAgniflowProps<"button", ToggleRootProviderBaseProps> {}

export const ToggleRootProvider = withProvider<
  HTMLButtonElement,
  ToggleRootProviderProps
>(ArkToggle.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleRootBaseProps
  extends Assign<ArkToggle.RootBaseProps, SlotRecipeProps<"toggle">>,
    UnstyledProp {}

export interface ToggleRootProps
  extends HTMLAgniflowProps<"button", ToggleRootBaseProps> {}

export const ToggleRoot = withProvider<HTMLButtonElement, ToggleRootProps>(
  ArkToggle.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const TogglePropsProvider =
  PropsProvider as React.Provider<ToggleRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ToggleIndicatorProps
  extends HTMLAgniflowProps<"div", ArkToggle.IndicatorBaseProps> {}

export const ToggleIndicator = withContext<
  HTMLButtonElement,
  ToggleIndicatorProps
>(ArkToggle.Indicator, "indicator", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const ToggleContext = ArkToggle.Context
