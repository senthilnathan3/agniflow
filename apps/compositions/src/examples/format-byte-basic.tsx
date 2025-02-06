import { FormatByte, Text } from "@agniflow-ui/react"

export const FormatByteBasic = () => {
  return (
    <Text textStyle="lg">
      File size: <FormatByte value={1450.45} />
    </Text>
  )
}
