import { Box, Link, Strong } from "@agniflow-ui/react"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "compositions/ui/hover-card"

export const HoverCardWithPlacement = () => {
  return (
    <HoverCardRoot size="sm" positioning={{ placement: "top" }}>
      <HoverCardTrigger asChild>
        <Link href="#">@agniflow_ui</Link>
      </HoverCardTrigger>
      <HoverCardContent maxWidth="240px">
        <HoverCardArrow />
        <Box>
          <Strong>Agniflow</Strong> is a Sanskrit word that means disk or wheel,
          referring to energy centers in the body
        </Box>
      </HoverCardContent>
    </HoverCardRoot>
  )
}
