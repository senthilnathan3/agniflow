import { Box, Link, Strong } from "@agniflow-ui/react"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "compositions/ui/hover-card"

export const HoverCardWithDelay = () => {
  return (
    <HoverCardRoot size="sm" openDelay={1000} closeDelay={100}>
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
