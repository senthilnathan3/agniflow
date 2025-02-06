import { HStack, Tag } from "@agniflow-ui/react"

export const TagBasic = () => {
  return (
    <HStack>
      <Tag.Root>
        <Tag.Label>Plain Tag</Tag.Label>
      </Tag.Root>
      <Tag.Root>
        <Tag.Label>Closable Tag</Tag.Label>
        <Tag.EndElement>
          <Tag.CloseTrigger />
        </Tag.EndElement>
      </Tag.Root>
    </HStack>
  )
}
