import { QrCode as AgniflowQrCode } from "@agniflow-ui/react"
import * as React from "react"

export interface QrCodeProps
  extends Omit<AgniflowQrCode.RootProps, "fill" | "overlay"> {
  fill?: string
  overlay?: React.ReactNode
}

export const QrCode = React.forwardRef<HTMLDivElement, QrCodeProps>(
  function QrCode(props, ref) {
    const { children, fill, overlay, ...rest } = props
    return (
      <AgniflowQrCode.Root ref={ref} {...rest}>
        <AgniflowQrCode.Frame style={{ fill }}>
          <AgniflowQrCode.Pattern />
        </AgniflowQrCode.Frame>
        {overlay}
        {children && (
          <AgniflowQrCode.Overlay>{children}</AgniflowQrCode.Overlay>
        )}
      </AgniflowQrCode.Root>
    )
  },
)
