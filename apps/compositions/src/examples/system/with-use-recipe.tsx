"use client"

import { Box, useRecipe } from "@agniflow-ui/react"

export const SystemWithUseRecipe = () => {
  const button = useRecipe({ key: "button" })
  return <Box css={button({ size: "md" })}>Styled like a button</Box>
}
