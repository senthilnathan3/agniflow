import type { ButtonProps, InputProps } from "@agniflow-ui/react"
import {
  Clipboard as AgniflowClipboard,
  Button,
  IconButton,
  Input,
} from "@agniflow-ui/react"
import * as React from "react"
import { LuCheck, LuClipboard, LuLink } from "react-icons/lu"

const ClipboardIcon = React.forwardRef<
  HTMLDivElement,
  AgniflowClipboard.IndicatorProps
>(function ClipboardIcon(props, ref) {
  return (
    <AgniflowClipboard.Indicator copied={<LuCheck />} {...props} ref={ref}>
      <LuClipboard />
    </AgniflowClipboard.Indicator>
  )
})

const ClipboardCopyText = React.forwardRef<
  HTMLDivElement,
  AgniflowClipboard.IndicatorProps
>(function ClipboardCopyText(props, ref) {
  return (
    <AgniflowClipboard.Indicator copied="Copied" {...props} ref={ref}>
      Copy
    </AgniflowClipboard.Indicator>
  )
})

export const ClipboardLabel = React.forwardRef<
  HTMLLabelElement,
  AgniflowClipboard.LabelProps
>(function ClipboardLabel(props, ref) {
  return (
    <AgniflowClipboard.Label
      textStyle="sm"
      fontWeight="medium"
      display="inline-block"
      mb="1"
      {...props}
      ref={ref}
    />
  )
})

export const ClipboardButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ClipboardButton(props, ref) {
    return (
      <AgniflowClipboard.Trigger asChild>
        <Button ref={ref} size="sm" variant="surface" {...props}>
          <ClipboardIcon />
          <ClipboardCopyText />
        </Button>
      </AgniflowClipboard.Trigger>
    )
  },
)

export const ClipboardLink = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function ClipboardLink(props, ref) {
    return (
      <AgniflowClipboard.Trigger asChild>
        <Button
          unstyled
          variant="plain"
          size="xs"
          display="inline-flex"
          alignItems="center"
          gap="2"
          ref={ref}
          {...props}
        >
          <LuLink />
          <ClipboardCopyText />
        </Button>
      </AgniflowClipboard.Trigger>
    )
  },
)

export const ClipboardIconButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function ClipboardIconButton(props, ref) {
  return (
    <AgniflowClipboard.Trigger asChild>
      <IconButton ref={ref} size="xs" variant="subtle" {...props}>
        <ClipboardIcon />
        <ClipboardCopyText srOnly />
      </IconButton>
    </AgniflowClipboard.Trigger>
  )
})

export const ClipboardInput = React.forwardRef<HTMLInputElement, InputProps>(
  function ClipboardInputElement(props, ref) {
    return (
      <AgniflowClipboard.Input asChild>
        <Input ref={ref} {...props} />
      </AgniflowClipboard.Input>
    )
  },
)

export const ClipboardRoot = AgniflowClipboard.Root
