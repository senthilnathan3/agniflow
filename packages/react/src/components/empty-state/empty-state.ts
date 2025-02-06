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
  useStyles: useEmptyStateStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "emptyState" })

export { useEmptyStateStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface EmptyStateRootBaseProps
  extends SlotRecipeProps<"emptyState">,
    UnstyledProp {}

export interface EmptyStateRootProps
  extends HTMLAgniflowProps<"div", EmptyStateRootBaseProps> {}

export const EmptyStateRoot = withProvider<HTMLDivElement, EmptyStateRootProps>(
  "div",
  "root",
)

////////////////////////////////////////////////////////////////////////////////////

export const EmptyStatePropsProvider =
  PropsProvider as React.Provider<EmptyStateRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface EmptyStateContentProps extends HTMLAgniflowProps<"div"> {}

export const EmptyStateContent = withContext<
  HTMLDivElement,
  EmptyStateContentProps
>("div", "content")

////////////////////////////////////////////////////////////////////////////////////

export interface EmptyStateIndicatorProps extends HTMLAgniflowProps<"div"> {}

export const EmptyStateIndicator = withContext<
  HTMLDivElement,
  EmptyStateIndicatorProps
>("div", "indicator")

////////////////////////////////////////////////////////////////////////////////////

export interface EmptyStateTitleProps extends HTMLAgniflowProps<"h3"> {}

export const EmptyStateTitle = withContext<
  HTMLHeadingElement,
  EmptyStateTitleProps
>("h3", "title")

////////////////////////////////////////////////////////////////////////////////////

export interface EmptyStateDescriptionProps extends HTMLAgniflowProps<"p"> {}

export const EmptyStateDescription = withContext<
  HTMLParagraphElement,
  EmptyStateDescriptionProps
>("p", "description")
