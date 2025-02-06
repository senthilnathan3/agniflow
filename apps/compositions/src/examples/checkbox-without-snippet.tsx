import { Checkbox } from "@agniflow-ui/react"

export const CheckboxWithoutSnippet = () => {
  return (
    <Checkbox.Root>
      <Checkbox.HiddenInput />
      <Checkbox.Control>
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
    </Checkbox.Root>
  )
}
