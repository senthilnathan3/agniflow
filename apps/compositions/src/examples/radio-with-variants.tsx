import { For, Stack } from "@agniflow-ui/react"
import { Radio, RadioGroup } from "compositions/ui/radio"

export const RadioWithVariants = () => {
  return (
    <Stack gap="4">
      <For each={["solid", "outline", "subtle"]}>
        {(variant) => (
          <RadioGroup
            key={variant}
            variant={variant}
            defaultValue="react"
            spaceX="4"
            colorPalette="teal"
          >
            <Radio value="react" minW="120px">
              Radio ({variant})
            </Radio>
            <Radio value="vue">Vue ({variant})</Radio>
          </RadioGroup>
        )}
      </For>
    </Stack>
  )
}
