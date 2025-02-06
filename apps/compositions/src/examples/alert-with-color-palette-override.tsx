import { Alert } from "@agniflow-ui/react"

export const AlertWithColorPaletteOverride = () => {
  return (
    <Alert.Root status="info" colorPalette="teal">
      <Alert.Indicator />
      <Alert.Title>This is an info alert but shown as teal</Alert.Title>
    </Alert.Root>
  )
}
