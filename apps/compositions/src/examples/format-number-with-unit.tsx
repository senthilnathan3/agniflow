import { FormatNumber, Text } from "@agniflow-ui/react"

export const FormatNumberWithUnit = () => {
  return (
    <Text textStyle="lg">
      <FormatNumber value={384.4} style="unit" unit="kilometer" />
    </Text>
  )
}
