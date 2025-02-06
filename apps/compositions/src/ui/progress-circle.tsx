import type { SystemStyleObject } from "@agniflow-ui/react"
import {
  AbsoluteCenter,
  ProgressCircle as AgniflowProgressCircle,
} from "@agniflow-ui/react"
import * as React from "react"

interface ProgressCircleRingProps extends AgniflowProgressCircle.CircleProps {
  trackColor?: SystemStyleObject["stroke"]
  cap?: SystemStyleObject["strokeLinecap"]
}

export const ProgressCircleRing = React.forwardRef<
  SVGSVGElement,
  ProgressCircleRingProps
>(function ProgressCircleRing(props, ref) {
  const { trackColor, cap, color, ...rest } = props
  return (
    <AgniflowProgressCircle.Circle {...rest} ref={ref}>
      <AgniflowProgressCircle.Track stroke={trackColor} />
      <AgniflowProgressCircle.Range stroke={color} strokeLinecap={cap} />
    </AgniflowProgressCircle.Circle>
  )
})

export const ProgressCircleValueText = React.forwardRef<
  HTMLDivElement,
  AgniflowProgressCircle.ValueTextProps
>(function ProgressCircleValueText(props, ref) {
  return (
    <AbsoluteCenter>
      <AgniflowProgressCircle.ValueText {...props} ref={ref} />
    </AbsoluteCenter>
  )
})

export const ProgressCircleRoot = AgniflowProgressCircle.Root
