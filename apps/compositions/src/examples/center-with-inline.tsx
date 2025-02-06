import { Box, Center, Link } from "@agniflow-ui/react"
import { LuArrowRight } from "react-icons/lu"

export const CenterWithInline = () => {
  return (
    <Link href="#">
      <Center inline gap="4">
        <Box>Visit Agniflow UI</Box>
        <LuArrowRight />
      </Center>
    </Link>
  )
}
