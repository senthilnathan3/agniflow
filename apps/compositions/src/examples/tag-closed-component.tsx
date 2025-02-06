import { Tag as AgniflowTag } from "@agniflow-ui/react"
import * as React from "react"

export interface TagProps extends AgniflowTag.RootProps {
  startElement?: React.ReactNode
  endElement?: React.ReactNode
  onClose?: VoidFunction
  closable?: boolean
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  function Tag(props, ref) {
    const {
      startElement,
      endElement,
      onClose,
      closable = !!onClose,
      children,
      ...rest
    } = props

    return (
      <AgniflowTag.Root ref={ref} {...rest}>
        {startElement && (
          <AgniflowTag.StartElement>{startElement}</AgniflowTag.StartElement>
        )}
        <AgniflowTag.Label>{children}</AgniflowTag.Label>
        {endElement && (
          <AgniflowTag.EndElement>{endElement}</AgniflowTag.EndElement>
        )}
        {closable && (
          <AgniflowTag.EndElement>
            <AgniflowTag.CloseTrigger onClick={onClose} />
          </AgniflowTag.EndElement>
        )}
      </AgniflowTag.Root>
    )
  },
)
