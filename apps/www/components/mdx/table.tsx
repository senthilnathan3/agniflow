import { Table as AgniflowTable } from "@agniflow-ui/react"

export const Table = (props: AgniflowTable.RootProps) => {
  return (
    <AgniflowTable.Root
      native
      size="sm"
      variant="line"
      {...props}
      css={{
        marginTop: "2em",
        marginBottom: "2em",
      }}
    />
  )
}
