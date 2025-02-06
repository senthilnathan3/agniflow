import { Field, Input } from "@agniflow-ui/react"

export const FieldWithDisabled = () => {
  return (
    <Field.Root disabled>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
