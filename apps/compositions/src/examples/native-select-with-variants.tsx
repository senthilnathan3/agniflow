import { For, Stack } from "@agniflow-ui/react"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "compositions/ui/native-select"

export const NativeSelectWithVariants = () => {
  return (
    <Stack gap="4" width="240px">
      <For each={["outline", "subtle", "plain"]}>
        {(variant) => (
          <NativeSelectRoot variant={variant} key={variant}>
            <NativeSelectField placeholder={`variant (${variant})`}>
              <option value="react">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </NativeSelectField>
          </NativeSelectRoot>
        )}
      </For>
    </Stack>
  )
}
