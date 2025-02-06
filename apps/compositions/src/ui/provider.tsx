"use client"

import { AgniflowProvider, defaultSystem } from "@agniflow-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "compositions/ui/color-mode"

export function Provider(props: ColorModeProviderProps) {
  return (
    <AgniflowProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </AgniflowProvider>
  )
}
