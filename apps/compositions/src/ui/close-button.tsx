import type { ButtonProps } from "@agniflow-ui/react"
import { IconButton as AgniflowIconButton } from "@agniflow-ui/react"
import * as React from "react"
import { LuX } from "react-icons/lu"

export type CloseButtonProps = ButtonProps

export const CloseButton = React.forwardRef<
  HTMLButtonElement,
  CloseButtonProps
>(function CloseButton(props, ref) {
  return (
    <AgniflowIconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
      {props.children ?? <LuX />}
    </AgniflowIconButton>
  )
})
