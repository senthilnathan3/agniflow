import { Progress as AgniflowProgress } from "@agniflow-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"
import * as React from "react"

interface ProgressProps extends AgniflowProgress.RootProps {
  showValueText?: boolean
  valueText?: React.ReactNode
  label?: React.ReactNode
  info?: React.ReactNode
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(props, ref) {
    const { showValueText, valueText, label, info, ...rest } = props
    return (
      <AgniflowProgress.Root {...rest} ref={ref}>
        {label && (
          <AgniflowProgress.Label>
            {label} {info && <InfoTip>{info}</InfoTip>}
          </AgniflowProgress.Label>
        )}
        <AgniflowProgress.Track>
          <AgniflowProgress.Range />
        </AgniflowProgress.Track>
        {showValueText && (
          <AgniflowProgress.ValueText>{valueText}</AgniflowProgress.ValueText>
        )}
      </AgniflowProgress.Root>
    )
  },
)
