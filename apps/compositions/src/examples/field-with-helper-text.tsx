import { Field, Input } from "@agniflow-ui/react"

export const FieldWithHelperText = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
      <Field.HelperText>This is a helper text</Field.HelperText>
    </Field.Root>
  )
}
