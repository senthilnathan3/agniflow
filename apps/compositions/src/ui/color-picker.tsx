import type { IconButtonProps, StackProps } from "@agniflow-ui/react"
import {
  ColorPicker as AgniflowColorPicker,
  For,
  IconButton,
  Portal,
  Span,
  Stack,
  Text,
  VStack,
} from "@agniflow-ui/react"
import * as React from "react"
import { LuCheck, LuPipette } from "react-icons/lu"

export const ColorPickerTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowColorPicker.TriggerProps & { fitContent?: boolean }
>(function ColorPickerTrigger(props, ref) {
  const { fitContent, ...rest } = props
  return (
    <AgniflowColorPicker.Trigger
      data-fit-content={fitContent || undefined}
      ref={ref}
      {...rest}
    >
      {props.children || <AgniflowColorPicker.ValueSwatch />}
    </AgniflowColorPicker.Trigger>
  )
})

export const ColorPickerInput = React.forwardRef<
  HTMLInputElement,
  Omit<AgniflowColorPicker.ChannelInputProps, "channel">
>(function ColorHexInput(props, ref) {
  return <AgniflowColorPicker.ChannelInput channel="hex" ref={ref} {...props} />
})

interface ColorPickerContentProps extends AgniflowColorPicker.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const ColorPickerContent = React.forwardRef<
  HTMLDivElement,
  ColorPickerContentProps
>(function ColorPickerContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <AgniflowColorPicker.Positioner>
        <AgniflowColorPicker.Content ref={ref} {...rest} />
      </AgniflowColorPicker.Positioner>
    </Portal>
  )
})

export const ColorPickerInlineContent = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.ContentProps
>(function ColorPickerInlineContent(props, ref) {
  return (
    <AgniflowColorPicker.Content
      animation="none"
      shadow="none"
      padding="0"
      ref={ref}
      {...props}
    />
  )
})

export const ColorPickerSliders = React.forwardRef<HTMLDivElement, StackProps>(
  function ColorPickerSliders(props, ref) {
    return (
      <Stack gap="1" flex="1" px="1" ref={ref} {...props}>
        <ColorPickerChannelSlider channel="hue" />
        <ColorPickerChannelSlider channel="alpha" />
      </Stack>
    )
  },
)

export const ColorPickerArea = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.AreaProps
>(function ColorPickerArea(props, ref) {
  return (
    <AgniflowColorPicker.Area ref={ref} {...props}>
      <AgniflowColorPicker.AreaBackground />
      <AgniflowColorPicker.AreaThumb />
    </AgniflowColorPicker.Area>
  )
})

export const ColorPickerEyeDropper = React.forwardRef<
  HTMLButtonElement,
  IconButtonProps
>(function ColorPickerEyeDropper(props, ref) {
  return (
    <AgniflowColorPicker.EyeDropperTrigger asChild>
      <IconButton size="xs" variant="outline" ref={ref} {...props}>
        <LuPipette />
      </IconButton>
    </AgniflowColorPicker.EyeDropperTrigger>
  )
})

export const ColorPickerChannelSlider = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.ChannelSliderProps
>(function ColorPickerSlider(props, ref) {
  return (
    <AgniflowColorPicker.ChannelSlider ref={ref} {...props}>
      <AgniflowColorPicker.TransparencyGrid size="0.6rem" />
      <AgniflowColorPicker.ChannelSliderTrack />
      <AgniflowColorPicker.ChannelSliderThumb />
    </AgniflowColorPicker.ChannelSlider>
  )
})

export const ColorPickerSwatchTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowColorPicker.SwatchTriggerProps & {
    swatchSize?: AgniflowColorPicker.SwatchTriggerProps["boxSize"]
  }
>(function ColorPickerSwatchTrigger(props, ref) {
  const { swatchSize, children, ...rest } = props
  return (
    <AgniflowColorPicker.SwatchTrigger
      ref={ref}
      style={{ ["--color" as string]: props.value }}
      {...rest}
    >
      {children || (
        <AgniflowColorPicker.Swatch boxSize={swatchSize} value={props.value}>
          <AgniflowColorPicker.SwatchIndicator>
            <LuCheck />
          </AgniflowColorPicker.SwatchIndicator>
        </AgniflowColorPicker.Swatch>
      )}
    </AgniflowColorPicker.SwatchTrigger>
  )
})

export const ColorPickerRoot = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.RootProps
>(function ColorPickerRoot(props, ref) {
  return (
    <AgniflowColorPicker.Root ref={ref} {...props}>
      {props.children}
      <AgniflowColorPicker.HiddenInput tabIndex={-1} />
    </AgniflowColorPicker.Root>
  )
})

const formatMap = {
  rgba: ["red", "green", "blue", "alpha"],
  hsla: ["hue", "saturation", "lightness", "alpha"],
  hsba: ["hue", "saturation", "brightness", "alpha"],
  hexa: ["hex", "alpha"],
} as const

export const ColorPickerChannelInputs = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.ViewProps
>(function ColorPickerChannelInputs(props, ref) {
  const channels = formatMap[props.format]
  return (
    <AgniflowColorPicker.View flexDirection="row" ref={ref} {...props}>
      {channels.map((channel) => (
        <VStack gap="1" key={channel} flex="1">
          <ColorPickerChannelInput
            channel={channel}
            px="0"
            height="7"
            textStyle="xs"
            textAlign="center"
          />
          <Text textStyle="xs" color="fg.muted" fontWeight="medium">
            {channel.charAt(0).toUpperCase()}
          </Text>
        </VStack>
      ))}
    </AgniflowColorPicker.View>
  )
})

export const ColorPickerChannelSliders = React.forwardRef<
  HTMLDivElement,
  AgniflowColorPicker.ViewProps
>(function ColorPickerChannelSliders(props, ref) {
  const channels = formatMap[props.format]
  return (
    <AgniflowColorPicker.View {...props} ref={ref}>
      <For each={channels}>
        {(channel) => (
          <Stack gap="1" key={channel}>
            <Span
              textStyle="xs"
              minW="5ch"
              textTransform="capitalize"
              fontWeight="medium"
            >
              {channel}
            </Span>
            <ColorPickerChannelSlider channel={channel} />
          </Stack>
        )}
      </For>
    </AgniflowColorPicker.View>
  )
})

export const ColorPickerLabel = AgniflowColorPicker.Label
export const ColorPickerControl = AgniflowColorPicker.Control
export const ColorPickerValueText = AgniflowColorPicker.ValueText
export const ColorPickerValueSwatch = AgniflowColorPicker.ValueSwatch
export const ColorPickerChannelInput = AgniflowColorPicker.ChannelInput
export const ColorPickerSwatchGroup = AgniflowColorPicker.SwatchGroup
