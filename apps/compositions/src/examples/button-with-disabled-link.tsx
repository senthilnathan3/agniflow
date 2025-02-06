"use client"

import { Button } from "@agniflow-ui/react"

export const ButtonWithDisabledLink = () => {
  return (
    <Button asChild>
      <a href="#" data-disabled="" onClick={(e) => e.preventDefault()}>
        Button
      </a>
    </Button>
  )
}
