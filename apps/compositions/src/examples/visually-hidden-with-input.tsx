import { HStack, VisuallyHidden } from "@agniflow-ui/react"

export const VisuallyHiddenWithInput = () => {
  return (
    <HStack>
      The input is hidden
      <VisuallyHidden asChild>
        <input type="text" placeholder="Search..." />
      </VisuallyHidden>
    </HStack>
  )
}
