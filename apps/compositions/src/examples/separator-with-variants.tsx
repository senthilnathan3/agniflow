import { Separator, Stack } from "@agniflow-ui/react"

export const SeparatorWithVariants = () => {
  return (
    <Stack>
      <Separator variant="solid" />
      <Separator variant="dashed" />
      <Separator variant="dotted" />
    </Stack>
  )
}
