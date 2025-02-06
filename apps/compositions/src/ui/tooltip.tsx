import { Tooltip as AgniflowTooltip, Portal } from "@agniflow-ui/react"
import * as React from "react"

export interface TooltipProps extends AgniflowTooltip.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content: React.ReactNode
  contentProps?: AgniflowTooltip.ContentProps
  disabled?: boolean
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  function Tooltip(props, ref) {
    const {
      showArrow,
      children,
      disabled,
      portalled = true,
      content,
      contentProps,
      portalRef,
      ...rest
    } = props

    if (disabled) return children

    return (
      <AgniflowTooltip.Root {...rest}>
        <AgniflowTooltip.Trigger asChild>{children}</AgniflowTooltip.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <AgniflowTooltip.Positioner>
            <AgniflowTooltip.Content ref={ref} {...contentProps}>
              {showArrow && (
                <AgniflowTooltip.Arrow>
                  <AgniflowTooltip.ArrowTip />
                </AgniflowTooltip.Arrow>
              )}
              {content}
            </AgniflowTooltip.Content>
          </AgniflowTooltip.Positioner>
        </Portal>
      </AgniflowTooltip.Root>
    )
  },
)
