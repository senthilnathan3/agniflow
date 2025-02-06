import { PinInput as AgniflowPinInput, Group } from "@agniflow-ui/react"
import * as React from "react"

export interface PinInputProps extends AgniflowPinInput.RootProps {
  rootRef?: React.Ref<HTMLDivElement>
  count?: number
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  attached?: boolean
}

export const PinInput = React.forwardRef<HTMLInputElement, PinInputProps>(
  function PinInput(props, ref) {
    const { count = 4, inputProps, rootRef, attached, ...rest } = props
    return (
      <AgniflowPinInput.Root ref={rootRef} {...rest}>
        <AgniflowPinInput.HiddenInput ref={ref} {...inputProps} />
        <AgniflowPinInput.Control>
          <Group attached={attached}>
            {Array.from({ length: count }).map((_, index) => (
              <AgniflowPinInput.Input key={index} index={index} />
            ))}
          </Group>
        </AgniflowPinInput.Control>
      </AgniflowPinInput.Root>
    )
  },
)
