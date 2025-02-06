import { Timeline as AgniflowTimeline } from "@agniflow-ui/react"
import * as React from "react"

export const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  AgniflowTimeline.IndicatorProps
>(function TimelineConnector(props, ref) {
  return (
    <AgniflowTimeline.Connector ref={ref}>
      <AgniflowTimeline.Separator />
      <AgniflowTimeline.Indicator {...props} />
    </AgniflowTimeline.Connector>
  )
})

export const TimelineRoot = AgniflowTimeline.Root
export const TimelineContent = AgniflowTimeline.Content
export const TimelineItem = AgniflowTimeline.Item
export const TimelineIndicator = AgniflowTimeline.Indicator
export const TimelineTitle = AgniflowTimeline.Title
export const TimelineDescription = AgniflowTimeline.Description
