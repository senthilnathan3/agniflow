"use client"

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
  useStyles: useStatusStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "status" })

export { useStatusStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface StatusRootBaseProps
  extends SlotRecipeProps<"status">,
    UnstyledProp {}

export interface StatusRootProps
  extends HTMLAgniflowProps<"div", StatusRootBaseProps> {}

export const StatusRoot = withProvider<HTMLDivElement, StatusRootProps>(
  "div",
  "root",
)

////////////////////////////////////////////////////////////////////////////////////

export const StatusPropsProvider =
  PropsProvider as React.Provider<StatusRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface StatusIndicatorProps extends HTMLAgniflowProps<"div"> {}

export const StatusIndicator = withContext<
  HTMLDivElement,
  StatusIndicatorProps
>("div", "indicator")
