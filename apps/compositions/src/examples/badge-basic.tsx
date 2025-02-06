import { Badge, Stack } from "@agniflow-ui/react"

export const BadgeBasic = () => {
  return (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Removed</Badge>
      <Badge colorPalette="purple">New</Badge>
    </Stack>
  )
}
