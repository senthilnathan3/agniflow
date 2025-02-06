import { Drawer as AgniflowDrawer, Portal } from "@agniflow-ui/react"
import { CloseButton } from "compositions/ui/close-button"
import * as React from "react"

interface DrawerContentProps extends AgniflowDrawer.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  offset?: AgniflowDrawer.ContentProps["padding"]
}

export const DrawerContent = React.forwardRef<
  HTMLDivElement,
  DrawerContentProps
>(function DrawerContent(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <AgniflowDrawer.Positioner padding={offset}>
        <AgniflowDrawer.Content ref={ref} {...rest} asChild={false}>
          {children}
        </AgniflowDrawer.Content>
      </AgniflowDrawer.Positioner>
    </Portal>
  )
})

export const DrawerCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowDrawer.CloseTriggerProps
>(function DrawerCloseTrigger(props, ref) {
  return (
    <AgniflowDrawer.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref} />
    </AgniflowDrawer.CloseTrigger>
  )
})

export const DrawerTrigger = AgniflowDrawer.Trigger
export const DrawerRoot = AgniflowDrawer.Root
export const DrawerFooter = AgniflowDrawer.Footer
export const DrawerHeader = AgniflowDrawer.Header
export const DrawerBody = AgniflowDrawer.Body
export const DrawerBackdrop = AgniflowDrawer.Backdrop
export const DrawerDescription = AgniflowDrawer.Description
export const DrawerTitle = AgniflowDrawer.Title
export const DrawerActionTrigger = AgniflowDrawer.ActionTrigger
