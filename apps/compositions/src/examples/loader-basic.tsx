import { HStack, Loader } from "@agniflow-ui/react"

export const LoaderBasic = () => {
  return (
    <HStack textStyle="sm" fontWeight="medium">
      <Loader text="Loading...">Click me</Loader>
    </HStack>
  )
}
