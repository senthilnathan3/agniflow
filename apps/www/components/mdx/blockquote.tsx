import {
  Blockquote as AgniflowBlockquote,
  type BlockquoteRootProps,
} from "@agniflow-ui/react"

export const Blockquote = (props: BlockquoteRootProps) => {
  return (
    <AgniflowBlockquote.Root
      {...props}
      css={{
        marginTop: "1.285em",
        marginBottom: "1.285em",
      }}
    />
  )
}
