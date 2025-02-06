import {
  Stat as AgniflowStat,
  Badge,
  type BadgeProps,
  FormatNumber,
} from "@agniflow-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"
import * as React from "react"

interface StatLabelProps extends AgniflowStat.LabelProps {
  info?: React.ReactNode
}

export const StatLabel = React.forwardRef<HTMLDivElement, StatLabelProps>(
  function StatLabel(props, ref) {
    const { info, children, ...rest } = props
    return (
      <AgniflowStat.Label {...rest} ref={ref}>
        {children}
        {info && <InfoTip>{info}</InfoTip>}
      </AgniflowStat.Label>
    )
  },
)

interface StatValueTextProps extends AgniflowStat.ValueTextProps {
  value?: number
  formatOptions?: Intl.NumberFormatOptions
}

export const StatValueText = React.forwardRef<
  HTMLDivElement,
  StatValueTextProps
>(function StatValueText(props, ref) {
  const { value, formatOptions, children, ...rest } = props
  return (
    <AgniflowStat.ValueText {...rest} ref={ref}>
      {children ||
        (value != null && <FormatNumber value={value} {...formatOptions} />)}
    </AgniflowStat.ValueText>
  )
})

export const StatUpTrend = React.forwardRef<HTMLDivElement, BadgeProps>(
  function StatUpTrend(props, ref) {
    return (
      <Badge colorPalette="green" gap="0" {...props} ref={ref}>
        <AgniflowStat.UpIndicator />
        {props.children}
      </Badge>
    )
  },
)

export const StatDownTrend = React.forwardRef<HTMLDivElement, BadgeProps>(
  function StatDownTrend(props, ref) {
    return (
      <Badge colorPalette="red" gap="0" {...props} ref={ref}>
        <AgniflowStat.DownIndicator />
        {props.children}
      </Badge>
    )
  },
)

export const StatRoot = AgniflowStat.Root
export const StatHelpText = AgniflowStat.HelpText
export const StatValueUnit = AgniflowStat.ValueUnit
