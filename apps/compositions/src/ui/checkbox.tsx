import { Checkbox as AgniflowCheckbox } from "@agniflow-ui/react"
import * as React from "react"

export interface CheckboxProps extends AgniflowCheckbox.RootProps {
  icon?: React.ReactNode
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const { icon, children, inputProps, rootRef, ...rest } = props
    return (
      <AgniflowCheckbox.Root ref={rootRef} {...rest}>
        <AgniflowCheckbox.HiddenInput ref={ref} {...inputProps} />
        <AgniflowCheckbox.Control>
          {icon || <AgniflowCheckbox.Indicator />}
        </AgniflowCheckbox.Control>
        {children != null && (
          <AgniflowCheckbox.Label>{children}</AgniflowCheckbox.Label>
        )}
      </AgniflowCheckbox.Root>
    )
  },
)
