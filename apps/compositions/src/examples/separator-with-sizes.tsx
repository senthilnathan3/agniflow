import { Separator, Stack } from "@agniflow-ui/react"

export const SeparatorWithSizes = () => {
  return (
    <Stack gap="4">
      <Separator size="xs" />
      <Separator size="sm" />
      <Separator size="md" />
      <Separator size="lg" />
    </Stack>
  )
}
