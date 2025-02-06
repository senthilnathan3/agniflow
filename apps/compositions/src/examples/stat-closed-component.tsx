import {
  Stat as AgniflowStat,
  Badge,
  FormatNumber,
  Show,
} from "@agniflow-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"
import * as React from "react"

interface StatProps extends AgniflowStat.RootProps {
  label?: React.ReactNode
  value?: number
  info?: React.ReactNode
  valueText?: React.ReactNode
  formatOptions?: Intl.NumberFormatOptions
  change?: number
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  function Stat(props, ref) {
    const { label, value, valueText, change, info, formatOptions, ...rest } =
      props
    return (
      <AgniflowStat.Root {...rest}>
        {label && (
          <AgniflowStat.Label>
            {label}
            {info && <InfoTip>{info}</InfoTip>}
          </AgniflowStat.Label>
        )}
        <AgniflowStat.ValueText {...rest} ref={ref}>
          {valueText ||
            (value != null && formatOptions && (
              <FormatNumber value={value} {...formatOptions} />
            ))}
        </AgniflowStat.ValueText>
        {change != null && (
          <Badge colorPalette={change > 0 ? "green" : "red"} gap="0">
            <Show when={change > 0} fallback={<AgniflowStat.DownIndicator />}>
              <AgniflowStat.UpIndicator />
            </Show>
            <FormatNumber
              value={Math.abs(change)}
              style="percent"
              maximumFractionDigits={2}
            />
          </Badge>
        )}
      </AgniflowStat.Root>
    )
  },
)
