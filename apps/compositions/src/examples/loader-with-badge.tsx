import { Badge, Loader } from "@agniflow-ui/react"

export const LoaderWithBadge = () => {
  return (
    <Badge>
      <Loader text="Loading...">Click me</Loader>
    </Badge>
  )
}
