"use client"

import { Box, Link, Strong } from "@agniflow-ui/react"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "compositions/ui/hover-card"
import { useState } from "react"

export const HoverCardControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <HoverCardRoot size="sm" open={open} onOpenChange={(e) => setOpen(e.open)}>
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
