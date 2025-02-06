import { CloseButton, HStack } from "@agniflow-ui/react"

export const CloseButtonWithVariants = () => {
  return (
    <HStack>
      <CloseButton variant="ghost" />
      <CloseButton variant="outline" />
      <CloseButton variant="subtle" />
      <CloseButton variant="solid" />
    </HStack>
  )
}
