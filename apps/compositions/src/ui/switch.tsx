import { Switch as AgniflowSwitch } from "@agniflow-ui/react"
import * as React from "react"

export interface SwitchProps extends AgniflowSwitch.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
  trackLabel?: { on: React.ReactNode; off: React.ReactNode }
  thumbLabel?: { on: React.ReactNode; off: React.ReactNode }
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(props, ref) {
    const { inputProps, children, rootRef, trackLabel, thumbLabel, ...rest } =
      props

    return (
      <AgniflowSwitch.Root ref={rootRef} {...rest}>
        <AgniflowSwitch.HiddenInput ref={ref} {...inputProps} />
        <AgniflowSwitch.Control>
          <AgniflowSwitch.Thumb>
            {thumbLabel && (
              <AgniflowSwitch.ThumbIndicator fallback={thumbLabel?.off}>
                {thumbLabel?.on}
              </AgniflowSwitch.ThumbIndicator>
            )}
          </AgniflowSwitch.Thumb>
          {trackLabel && (
            <AgniflowSwitch.Indicator fallback={trackLabel.off}>
              {trackLabel.on}
            </AgniflowSwitch.Indicator>
          )}
        </AgniflowSwitch.Control>
        {children != null && (
          <AgniflowSwitch.Label>{children}</AgniflowSwitch.Label>
        )}
      </AgniflowSwitch.Root>
    )
  },
)
