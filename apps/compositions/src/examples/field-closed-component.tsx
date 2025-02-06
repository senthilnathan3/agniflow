import { Field as AgniflowField } from "@agniflow-ui/react"
import * as React from "react"

export interface FieldProps extends Omit<AgniflowField.RootProps, "label"> {
  label?: React.ReactNode
  helperText?: React.ReactNode
  errorText?: React.ReactNode
  optionalText?: React.ReactNode
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(props, ref) {
    const { label, children, helperText, errorText, optionalText, ...rest } =
      props
    return (
      <AgniflowField.Root ref={ref} {...rest}>
        {label && (
          <AgniflowField.Label>
            {label}
            <AgniflowField.RequiredIndicator fallback={optionalText} />
          </AgniflowField.Label>
        )}
        {children}
        {helperText && (
          <AgniflowField.HelperText>{helperText}</AgniflowField.HelperText>
        )}
        {errorText && (
          <AgniflowField.ErrorText>{errorText}</AgniflowField.ErrorText>
        )}
      </AgniflowField.Root>
    )
  },
)
