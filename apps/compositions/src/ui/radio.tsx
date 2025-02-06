import { RadioGroup as AgniflowRadioGroup } from "@agniflow-ui/react"
import * as React from "react"

export interface RadioProps extends AgniflowRadioGroup.ItemProps {
  rootRef?: React.Ref<HTMLDivElement>
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, rootRef, ...rest } = props
    return (
      <AgniflowRadioGroup.Item ref={rootRef} {...rest}>
        <AgniflowRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <AgniflowRadioGroup.ItemIndicator />
        {children && (
          <AgniflowRadioGroup.ItemText>{children}</AgniflowRadioGroup.ItemText>
        )}
      </AgniflowRadioGroup.Item>
    )
  },
)

export const RadioGroup = AgniflowRadioGroup.Root
