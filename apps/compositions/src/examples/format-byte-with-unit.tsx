import { FormatByte, Text } from "@agniflow-ui/react"

export const FormatByteWithUnit = () => {
  return (
    <Text textStyle="lg">
      File size: <FormatByte value={1450.45} unit="bit" />
    </Text>
  )
}
