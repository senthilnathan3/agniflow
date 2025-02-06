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
  useStyles: useTimelineStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "timeline" })

export { useTimelineStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineRootBaseProps
  extends SlotRecipeProps<"timeline">,
    UnstyledProp {}

export interface TimelineRootProps
  extends HTMLAgniflowProps<"div", TimelineRootBaseProps> {}

export const TimelineRoot = withProvider<HTMLDivElement, TimelineRootProps>(
  "div",
  "root",
  { defaultProps: { role: "list" } },
)

export const TimelineRootPropsProvider =
  PropsProvider as React.Provider<TimelineRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineItemProps extends HTMLAgniflowProps<"div"> {}

export const TimelineItem = withContext<HTMLDivElement, TimelineItemProps>(
  "div",
  "item",
  { defaultProps: { role: "listitem" } },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineSeparatorProps extends HTMLAgniflowProps<"div"> {}

export const TimelineSeparator = withContext<
  HTMLDivElement,
  TimelineSeparatorProps
>("div", "separator")

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineIndicatorProps extends HTMLAgniflowProps<"div"> {}

export const TimelineIndicator = withContext<
  HTMLDivElement,
  TimelineIndicatorProps
>("div", "indicator")

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineContentProps extends HTMLAgniflowProps<"div"> {}

export const TimelineContent = withContext<
  HTMLDivElement,
  TimelineContentProps
>("div", "content")

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineTitleProps extends HTMLAgniflowProps<"div"> {}

export const TimelineTitle = withContext<HTMLDivElement, TimelineTitleProps>(
  "div",
  "title",
)

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineDescriptionProps extends HTMLAgniflowProps<"div"> {}

export const TimelineDescription = withContext<
  HTMLDivElement,
  TimelineDescriptionProps
>("div", "description")

////////////////////////////////////////////////////////////////////////////////////

export interface TimelineConnectorProps extends HTMLAgniflowProps<"div"> {}

export const TimelineConnector = withContext<
  HTMLDivElement,
  TimelineConnectorProps
>("div", "connector")
