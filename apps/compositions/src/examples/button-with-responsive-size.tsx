import { Button } from "@agniflow-ui/react"

export const ButtonWithResponsiveSize = () => {
  return (
    <Button rounded="3xl" size={{ base: "md", md: "lg" }}>
      Button
    </Button>
  )
}
