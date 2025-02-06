import { For, Radiomark, Stack } from "@agniflow-ui/react"

export const RadiomarkVariants = () => {
  return (
    <Stack>
      <For each={["outline", "subtle", "solid", "inverted"]}>
        {(variant) => <Radiomark checked key={variant} variant={variant} />}
      </For>
    </Stack>
  )
}
