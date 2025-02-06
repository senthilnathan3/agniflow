import { Editable, Input } from "@agniflow-ui/react"

export const EditableWithCustomComponent = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Preview>
        <Input />
      </Editable.Preview>
    </Editable.Root>
  )
}
