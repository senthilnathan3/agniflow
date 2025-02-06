import { HStack } from "@agniflow-ui/react"
import { ColorSwatch } from "@agniflow-ui/react"
import { For } from "@agniflow-ui/react"

export const ColorSwatchWithSizes = () => {
  return (
    <HStack>
      <For each={["2xs", "xs", "sm", "md", "lg", "xl", "2xl"]}>
        {(size) => <ColorSwatch key={size} value="#bada55" size={size} />}
      </For>
    </HStack>
  )
}
