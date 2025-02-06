import { Slider as AgniflowSlider, For, HStack } from "@agniflow-ui/react"
import * as React from "react"

export interface SliderProps extends AgniflowSlider.RootProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>
  label?: React.ReactNode
  showValue?: boolean
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  function Slider(props, ref) {
    const { marks: marksProp, label, showValue, ...rest } = props
    const value = props.defaultValue ?? props.value

    const marks = marksProp?.map((mark) => {
      if (typeof mark === "number") return { value: mark, label: undefined }
      return mark
    })

    const hasMarkLabel = !!marks?.some((mark) => mark.label)

    return (
      <AgniflowSlider.Root ref={ref} thumbAlignment="center" {...rest}>
        {label && !showValue && (
          <AgniflowSlider.Label>{label}</AgniflowSlider.Label>
        )}
        {label && showValue && (
          <HStack justify="space-between">
            <AgniflowSlider.Label>{label}</AgniflowSlider.Label>
            <AgniflowSlider.ValueText />
          </HStack>
        )}
        <AgniflowSlider.Control data-has-mark-label={hasMarkLabel || undefined}>
          <AgniflowSlider.Track>
            <AgniflowSlider.Range />
          </AgniflowSlider.Track>
          <SliderThumbs value={value} />
          <SliderMarks marks={marks} />
        </AgniflowSlider.Control>
      </AgniflowSlider.Root>
    )
  },
)

function SliderThumbs(props: { value?: number[] }) {
  const { value } = props
  return (
    <For each={value}>
      {(_, index) => (
        <AgniflowSlider.Thumb key={index} index={index}>
          <AgniflowSlider.HiddenInput />
        </AgniflowSlider.Thumb>
      )}
    </For>
  )
}

interface SliderMarksProps {
  marks?: Array<number | { value: number; label: React.ReactNode }>
}

const SliderMarks = React.forwardRef<HTMLDivElement, SliderMarksProps>(
  function SliderMarks(props, ref) {
    const { marks } = props
    if (!marks?.length) return null

    return (
      <AgniflowSlider.MarkerGroup ref={ref}>
        {marks.map((mark, index) => {
          const value = typeof mark === "number" ? mark : mark.value
          const label = typeof mark === "number" ? undefined : mark.label
          return (
            <AgniflowSlider.Marker key={index} value={value}>
              <AgniflowSlider.MarkerIndicator />
              {label}
            </AgniflowSlider.Marker>
          )
        })}
      </AgniflowSlider.MarkerGroup>
    )
  },
)
