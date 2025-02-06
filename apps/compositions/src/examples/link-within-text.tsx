import { Link, Text } from "@agniflow-ui/react"

export const LinkWithinText = () => {
  return (
    <Text>
      Visit the{" "}
      <Link
        variant="underline"
        href="https://chakra-ui.com"
        colorPalette="teal"
      >
        Agniflow UI
      </Link>{" "}
      website
    </Text>
  )
}
