"use client"

import { AgniflowProvider } from "@agniflow-ui/react"
import { Toaster } from "compositions/ui/toaster"
import { ThemeProvider } from "next-themes"
import { system } from "./theme"

export const Provider = (props: { children: React.ReactNode }) => {
  return (
    <AgniflowProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
        <Toaster />
      </ThemeProvider>
    </AgniflowProvider>
  )
}
