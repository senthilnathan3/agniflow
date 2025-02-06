import { Dialog as AgniflowDialog, Portal } from "@agniflow-ui/react"
import { CloseButton } from "compositions/ui/close-button"
import * as React from "react"

interface DialogContentProps extends AgniflowDialog.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
  backdrop?: boolean
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  DialogContentProps
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <AgniflowDialog.Backdrop />}
      <AgniflowDialog.Positioner>
        <AgniflowDialog.Content ref={ref} {...rest} asChild={false}>
          {children}
        </AgniflowDialog.Content>
      </AgniflowDialog.Positioner>
    </Portal>
  )
})

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowDialog.CloseTriggerProps
>(function DialogCloseTrigger(props, ref) {
  return (
    <AgniflowDialog.CloseTrigger
      position="absolute"
      top="2"
      insetEnd="2"
      {...props}
      asChild
    >
      <CloseButton size="sm" ref={ref}>
        {props.children}
      </CloseButton>
    </AgniflowDialog.CloseTrigger>
  )
})

export const DialogRoot = AgniflowDialog.Root
export const DialogFooter = AgniflowDialog.Footer
export const DialogHeader = AgniflowDialog.Header
export const DialogBody = AgniflowDialog.Body
export const DialogBackdrop = AgniflowDialog.Backdrop
export const DialogTitle = AgniflowDialog.Title
export const DialogDescription = AgniflowDialog.Description
export const DialogTrigger = AgniflowDialog.Trigger
export const DialogActionTrigger = AgniflowDialog.ActionTrigger
