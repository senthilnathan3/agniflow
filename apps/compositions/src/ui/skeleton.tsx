import type {
  SkeletonProps as AgniflowSkeletonProps,
  CircleProps,
} from "@agniflow-ui/react"
import { Skeleton as AgniflowSkeleton, Circle, Stack } from "@agniflow-ui/react"
import * as React from "react"

export interface SkeletonCircleProps extends AgniflowSkeletonProps {
  size?: CircleProps["size"]
}

export const SkeletonCircle = React.forwardRef<
  HTMLDivElement,
  SkeletonCircleProps
>(function SkeletonCircle(props, ref) {
  const { size, ...rest } = props
  return (
    <Circle size={size} asChild ref={ref}>
      <AgniflowSkeleton {...rest} />
    </Circle>
  )
})

export interface SkeletonTextProps extends AgniflowSkeletonProps {
  noOfLines?: number
}

export const SkeletonText = React.forwardRef<HTMLDivElement, SkeletonTextProps>(
  function SkeletonText(props, ref) {
    const { noOfLines = 3, gap, ...rest } = props
    return (
      <Stack gap={gap} width="full" ref={ref}>
        {Array.from({ length: noOfLines }).map((_, index) => (
          <AgniflowSkeleton
            height="4"
            key={index}
            {...props}
            _last={{ maxW: "80%" }}
            {...rest}
          />
        ))}
      </Stack>
    )
  },
)

export const Skeleton = AgniflowSkeleton
