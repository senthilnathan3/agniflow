import { Checkmark, Stack } from "@agniflow-ui/react"

export const CheckmarkBasic = () => {
  return (
    <Stack>
      <Checkmark />
      <Checkmark checked />
      <Checkmark indeterminate />
      <Checkmark disabled />
      <Checkmark checked disabled />
      <Checkmark indeterminate disabled />
    </Stack>
  )
}
