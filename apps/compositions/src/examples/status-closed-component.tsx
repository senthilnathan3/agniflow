import type { ColorPalette } from "@agniflow-ui/react"
import { Status as AgniflowStatus } from "@agniflow-ui/react"
import * as React from "react"

type StatusValue = "success" | "error" | "warning" | "info"

export interface StatusProps extends AgniflowStatus.RootProps {
  value?: StatusValue
}

const statusMap: Record<StatusValue, ColorPalette> = {
  success: "green",
  error: "red",
  warning: "orange",
  info: "blue",
}

export const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  function Status(props, ref) {
    const { children, value = "info", ...rest } = props
    const colorPalette = rest.colorPalette ?? statusMap[value]
    return (
      <AgniflowStatus.Root ref={ref} {...rest} colorPalette={colorPalette}>
        <AgniflowStatus.Indicator />
        {children}
      </AgniflowStatus.Root>
    )
  },
)
