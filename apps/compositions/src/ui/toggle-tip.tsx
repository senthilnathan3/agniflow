import {
  Popover as AgniflowPopover,
  IconButton,
  Portal,
} from "@agniflow-ui/react"
import * as React from "react"
import { HiOutlineInformationCircle } from "react-icons/hi"

export interface ToggleTipProps extends AgniflowPopover.RootProps {
  showArrow?: boolean
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  content?: React.ReactNode
}

export const ToggleTip = React.forwardRef<HTMLDivElement, ToggleTipProps>(
  function ToggleTip(props, ref) {
    const {
      showArrow,
      children,
      portalled = true,
      content,
      portalRef,
      ...rest
    } = props

    return (
      <AgniflowPopover.Root
        {...rest}
        positioning={{ ...rest.positioning, gutter: 4 }}
      >
        <AgniflowPopover.Trigger asChild>{children}</AgniflowPopover.Trigger>
        <Portal disabled={!portalled} container={portalRef}>
          <AgniflowPopover.Positioner>
            <AgniflowPopover.Content
              width="auto"
              px="2"
              py="1"
              textStyle="xs"
              rounded="sm"
              ref={ref}
            >
              {showArrow && (
                <AgniflowPopover.Arrow>
                  <AgniflowPopover.ArrowTip />
                </AgniflowPopover.Arrow>
              )}
              {content}
            </AgniflowPopover.Content>
          </AgniflowPopover.Positioner>
        </Portal>
      </AgniflowPopover.Root>
    )
  },
)

export const InfoTip = React.forwardRef<
  HTMLDivElement,
  Partial<ToggleTipProps>
>(function InfoTip(props, ref) {
  const { children, ...rest } = props
  return (
    <ToggleTip content={children} {...rest} ref={ref}>
      <IconButton
        variant="ghost"
        aria-label="info"
        size="2xs"
        colorPalette="gray"
      >
        <HiOutlineInformationCircle />
      </IconButton>
    </ToggleTip>
  )
})
