import { Field, Input } from "@agniflow-ui/react"

export const FieldBasic = () => {
  return (
    <Field.Root>
      <Field.Label>Email</Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
