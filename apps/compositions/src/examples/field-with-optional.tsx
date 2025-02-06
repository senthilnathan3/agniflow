import { Badge, Field, Input } from "@agniflow-ui/react"

export const FieldWithOptional = () => {
  return (
    <Field.Root>
      <Field.Label>
        Email
        <Field.RequiredIndicator
          fallback={
            <Badge size="xs" variant="surface">
              Optional
            </Badge>
          }
        />
      </Field.Label>
      <Input placeholder="me@example.com" />
    </Field.Root>
  )
}
