import { Blockquote as AgniflowBlockquote } from "@agniflow-ui/react"
import * as React from "react"

export interface BlockquoteProps extends AgniflowBlockquote.RootProps {
  cite?: React.ReactNode
  citeUrl?: string
  icon?: React.ReactNode
  showDash?: boolean
}

export const Blockquote = React.forwardRef<HTMLDivElement, BlockquoteProps>(
  function Blockquote(props, ref) {
    const { children, cite, citeUrl, showDash, icon, ...rest } = props

    return (
      <AgniflowBlockquote.Root ref={ref} {...rest}>
        {icon}
        <AgniflowBlockquote.Content cite={citeUrl}>
          {children}
        </AgniflowBlockquote.Content>
        {cite && (
          <AgniflowBlockquote.Caption>
            {showDash ? <>&mdash;</> : null} <cite>{cite}</cite>
          </AgniflowBlockquote.Caption>
        )}
      </AgniflowBlockquote.Root>
    )
  },
)

export const BlockquoteIcon = AgniflowBlockquote.Icon
