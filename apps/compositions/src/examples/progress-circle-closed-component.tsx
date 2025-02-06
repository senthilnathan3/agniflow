import type { SystemStyleObject } from "@agniflow-ui/react"
import {
  AbsoluteCenter,
  ProgressCircle as AgniflowProgressCircle,
} from "@agniflow-ui/react"
import * as React from "react"

interface ProgressCircleProps extends AgniflowProgressCircle.RootProps {
  showValueText?: boolean
  valueText?: React.ReactNode
  trackColor?: SystemStyleObject["stroke"]
  cap?: SystemStyleObject["strokeLinecap"]
  thickness?: SystemStyleObject["strokeWidth"]
}

export const ProgressCircle = React.forwardRef<
  HTMLDivElement,
  ProgressCircleProps
>(function ProgressCircle(props, ref) {
  const {
    showValueText,
    valueText,
    trackColor,
    color,
    cap,
    thickness,
    ...rest
  } = props

  return (
    <AgniflowProgressCircle.Root {...rest} ref={ref}>
      <AgniflowProgressCircle.Circle css={{ "--thickness": thickness }}>
        <AgniflowProgressCircle.Track stroke={trackColor} />
        <AgniflowProgressCircle.Range stroke={color} strokeLinecap={cap} />
      </AgniflowProgressCircle.Circle>
      {showValueText && (
        <AbsoluteCenter>
          <AgniflowProgressCircle.ValueText>
            {valueText}
          </AgniflowProgressCircle.ValueText>
        </AbsoluteCenter>
      )}
    </AgniflowProgressCircle.Root>
  )
})
