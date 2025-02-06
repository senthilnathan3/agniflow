import {
  Avatar as AgniflowAvatar,
  AvatarGroup as AgniflowAvatarGroup,
} from "@agniflow-ui/react"
import * as React from "react"

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

export interface AvatarProps extends AgniflowAvatar.RootProps {
  name?: string
  src?: string
  srcSet?: string
  loading?: ImageProps["loading"]
  icon?: React.ReactElement
  fallback?: React.ReactNode
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(props, ref) {
    const { name, src, srcSet, loading, icon, fallback, children, ...rest } =
      props
    return (
      <AgniflowAvatar.Root ref={ref} {...rest}>
        <AgniflowAvatar.Fallback name={name}>
          {fallback || icon}
        </AgniflowAvatar.Fallback>
        <AgniflowAvatar.Image src={src} srcSet={srcSet} loading={loading} />
        {children}
      </AgniflowAvatar.Root>
    )
  },
)

export const AvatarGroup = AgniflowAvatarGroup
