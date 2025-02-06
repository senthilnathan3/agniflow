import { EmptyState as AgniflowEmptyState, VStack } from "@agniflow-ui/react"
import * as React from "react"

export interface EmptyStateProps extends AgniflowEmptyState.RootProps {
  title: string
  description?: string
  icon?: React.ReactNode
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  function EmptyState(props, ref) {
    const { title, description, icon, children, ...rest } = props
    return (
      <AgniflowEmptyState.Root ref={ref} {...rest}>
        <AgniflowEmptyState.Content>
          {icon && (
            <AgniflowEmptyState.Indicator>{icon}</AgniflowEmptyState.Indicator>
          )}
          {description ? (
            <VStack textAlign="center">
              <AgniflowEmptyState.Title>{title}</AgniflowEmptyState.Title>
              <AgniflowEmptyState.Description>
                {description}
              </AgniflowEmptyState.Description>
            </VStack>
          ) : (
            <AgniflowEmptyState.Title>{title}</AgniflowEmptyState.Title>
          )}
          {children}
        </AgniflowEmptyState.Content>
      </AgniflowEmptyState.Root>
    )
  },
)
