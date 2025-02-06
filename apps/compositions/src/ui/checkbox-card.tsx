import { CheckboxCard as AgniflowCheckboxCard } from "@agniflow-ui/react"
import * as React from "react"

export interface CheckboxCardProps extends AgniflowCheckboxCard.RootProps {
  icon?: React.ReactElement
  label?: React.ReactNode
  description?: React.ReactNode
  addon?: React.ReactNode
  indicator?: React.ReactNode | null
  indicatorPlacement?: "start" | "end" | "inside"
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const CheckboxCard = React.forwardRef<
  HTMLInputElement,
  CheckboxCardProps
>(function CheckboxCard(props, ref) {
  const {
    inputProps,
    label,
    description,
    icon,
    addon,
    indicator = <AgniflowCheckboxCard.Indicator />,
    indicatorPlacement = "end",
    ...rest
  } = props

  const hasContent = label || description || icon
  const ContentWrapper = indicator
    ? AgniflowCheckboxCard.Content
    : React.Fragment

  return (
    <AgniflowCheckboxCard.Root {...rest}>
      <AgniflowCheckboxCard.HiddenInput ref={ref} {...inputProps} />
      <AgniflowCheckboxCard.Control>
        {indicatorPlacement === "start" && indicator}
        {hasContent && (
          <ContentWrapper>
            {icon}
            {label && (
              <AgniflowCheckboxCard.Label>{label}</AgniflowCheckboxCard.Label>
            )}
            {description && (
              <AgniflowCheckboxCard.Description>
                {description}
              </AgniflowCheckboxCard.Description>
            )}
            {indicatorPlacement === "inside" && indicator}
          </ContentWrapper>
        )}
        {indicatorPlacement === "end" && indicator}
      </AgniflowCheckboxCard.Control>
      {addon && (
        <AgniflowCheckboxCard.Addon>{addon}</AgniflowCheckboxCard.Addon>
      )}
    </AgniflowCheckboxCard.Root>
  )
})

export const CheckboxCardIndicator = AgniflowCheckboxCard.Indicator
