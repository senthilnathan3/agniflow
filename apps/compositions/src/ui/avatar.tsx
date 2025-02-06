"use client"

import type { GroupProps, SlotRecipeProps } from "@agniflow-ui/react"
import { Avatar as AgniflowAvatar, Group } from "@agniflow-ui/react"
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
        <AvatarFallback name={name} icon={icon}>
          {fallback}
        </AvatarFallback>
        <AgniflowAvatar.Image src={src} srcSet={srcSet} loading={loading} />
        {children}
      </AgniflowAvatar.Root>
    )
  },
)

interface AvatarFallbackProps extends AgniflowAvatar.FallbackProps {
  name?: string
  icon?: React.ReactElement
}

const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  function AvatarFallback(props, ref) {
    const { name, icon, children, ...rest } = props
    return (
      <AgniflowAvatar.Fallback ref={ref} {...rest}>
        {children}
        {name != null && children == null && <>{getInitials(name)}</>}
        {name == null && children == null && (
          <AgniflowAvatar.Icon asChild={!!icon}>{icon}</AgniflowAvatar.Icon>
        )}
      </AgniflowAvatar.Fallback>
    )
  },
)

function getInitials(name: string) {
  const names = name.trim().split(" ")
  const firstName = names[0] != null ? names[0] : ""
  const lastName = names.length > 1 ? names[names.length - 1] : ""
  return firstName && lastName
    ? `${firstName.charAt(0)}${lastName.charAt(0)}`
    : firstName.charAt(0)
}

interface AvatarGroupProps extends GroupProps, SlotRecipeProps<"avatar"> {}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup(props, ref) {
    const { size, variant, borderless, ...rest } = props
    return (
      <AgniflowAvatar.PropsProvider value={{ size, variant, borderless }}>
        <Group gap="0" spaceX="-3" ref={ref} {...rest} />
      </AgniflowAvatar.PropsProvider>
    )
  },
)
