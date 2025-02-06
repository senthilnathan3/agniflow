import { NumberInput as AgniflowNumberInput } from "@agniflow-ui/react"
import * as React from "react"

export interface NumberInputProps extends AgniflowNumberInput.RootProps {}

export const NumberInputRoot = React.forwardRef<
  HTMLDivElement,
  NumberInputProps
>(function NumberInput(props, ref) {
  const { children, ...rest } = props
  return (
    <AgniflowNumberInput.Root ref={ref} variant="outline" {...rest}>
      {children}
      <AgniflowNumberInput.Control>
        <AgniflowNumberInput.IncrementTrigger />
        <AgniflowNumberInput.DecrementTrigger />
      </AgniflowNumberInput.Control>
    </AgniflowNumberInput.Root>
  )
})

export const NumberInputField = AgniflowNumberInput.Input
export const NumberInputScrubber = AgniflowNumberInput.Scrubber
export const NumberInputLabel = AgniflowNumberInput.Label
