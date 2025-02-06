import { Progress as AgniflowProgress } from "@agniflow-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"
import * as React from "react"

export const ProgressBar = React.forwardRef<
  HTMLDivElement,
  AgniflowProgress.TrackProps
>(function ProgressBar(props, ref) {
  return (
    <AgniflowProgress.Track {...props} ref={ref}>
      <AgniflowProgress.Range />
    </AgniflowProgress.Track>
  )
})

export interface ProgressLabelProps extends AgniflowProgress.LabelProps {
  info?: React.ReactNode
}

export const ProgressLabel = React.forwardRef<
  HTMLDivElement,
  ProgressLabelProps
>(function ProgressLabel(props, ref) {
  const { children, info, ...rest } = props
  return (
    <AgniflowProgress.Label {...rest} ref={ref}>
      {children}
      {info && <InfoTip>{info}</InfoTip>}
    </AgniflowProgress.Label>
  )
})

export const ProgressRoot = AgniflowProgress.Root
export const ProgressValueText = AgniflowProgress.ValueText
