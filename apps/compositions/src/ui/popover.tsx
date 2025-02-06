import { Popover as AgniflowPopover, Portal } from "@agniflow-ui/react"
import { CloseButton } from "compositions/ui/close-button"
import * as React from "react"

interface PopoverContentProps extends AgniflowPopover.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(function PopoverContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <AgniflowPopover.Positioner>
        <AgniflowPopover.Content ref={ref} {...rest} />
      </AgniflowPopover.Positioner>
    </Portal>
  )
})

export const PopoverArrow = React.forwardRef<
  HTMLDivElement,
  AgniflowPopover.ArrowProps
>(function PopoverArrow(props, ref) {
  return (
    <AgniflowPopover.Arrow {...props} ref={ref}>
      <AgniflowPopover.ArrowTip />
    </AgniflowPopover.Arrow>
  )
})

export const PopoverCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowPopover.CloseTriggerProps
>(function PopoverCloseTrigger(props, ref) {
  return (
    <AgniflowPopover.CloseTrigger
      position="absolute"
      top="1"
      insetEnd="1"
      {...props}
      asChild
      ref={ref}
    >
      <CloseButton size="sm" />
    </AgniflowPopover.CloseTrigger>
  )
})

export const PopoverTitle = AgniflowPopover.Title
export const PopoverDescription = AgniflowPopover.Description
export const PopoverFooter = AgniflowPopover.Footer
export const PopoverHeader = AgniflowPopover.Header
export const PopoverRoot = AgniflowPopover.Root
export const PopoverBody = AgniflowPopover.Body
export const PopoverTrigger = AgniflowPopover.Trigger
