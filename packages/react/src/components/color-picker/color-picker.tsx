"use client"

import type { Assign } from "@ark-ui/react"
import { ColorPicker as ArkColorPicker } from "@ark-ui/react/color-picker"
import {
  type HTMLAgniflowProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useColorPickerStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "colorPicker" })

export { useColorPickerStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerRootProviderBaseProps
  extends Assign<
      ArkColorPicker.RootProviderBaseProps,
      SlotRecipeProps<"colorPicker">
    >,
    UnstyledProp {}

export interface ColorPickerRootProviderProps
  extends HTMLAgniflowProps<"div", ColorPickerRootProviderBaseProps> {}

export const ColorPickerRootProvider = withProvider<
  HTMLDivElement,
  ColorPickerRootProviderProps
>(ArkColorPicker.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerRootBaseProps
  extends Assign<ArkColorPicker.RootBaseProps, SlotRecipeProps<"colorPicker">>,
    UnstyledProp {}

export interface ColorPickerRootProps
  extends HTMLAgniflowProps<"div", ColorPickerRootBaseProps> {}

export const ColorPickerRoot = withProvider<
  HTMLDivElement,
  ColorPickerRootProps
>(ArkColorPicker.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const ColorPickerPropsProvider =
  PropsProvider as React.Provider<ColorPickerRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerLabelProps
  extends HTMLAgniflowProps<"label", ArkColorPicker.LabelBaseProps> {}

export const ColorPickerLabel = withContext<
  HTMLLabelElement,
  ColorPickerLabelProps
>(ArkColorPicker.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerControlProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ControlBaseProps> {}

export const ColorPickerControl = withContext<
  HTMLDivElement,
  ColorPickerControlProps
>(ArkColorPicker.Control, "control", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerTriggerProps
  extends HTMLAgniflowProps<"button", ArkColorPicker.TriggerBaseProps> {}

export const ColorPickerTrigger = withContext<
  HTMLButtonElement,
  ColorPickerTriggerProps
>(ArkColorPicker.Trigger, "trigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerPositionerProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.PositionerBaseProps> {}

export const ColorPickerPositioner = withContext<
  HTMLDivElement,
  ColorPickerPositionerProps
>(ArkColorPicker.Positioner, "positioner", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerContentProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ContentBaseProps> {}

export const ColorPickerContent = withContext<
  HTMLDivElement,
  ColorPickerContentProps
>(ArkColorPicker.Content, "content", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerAreaProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.AreaBaseProps> {}

export const ColorPickerArea = withContext<
  HTMLDivElement,
  ColorPickerAreaProps
>(ArkColorPicker.Area, "area", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerAreaBackgroundProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.AreaBackgroundBaseProps> {}

export const ColorPickerAreaBackground = withContext<
  HTMLDivElement,
  ColorPickerAreaBackgroundProps
>(ArkColorPicker.AreaBackground, "areaBackground", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerAreaThumbProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.AreaThumbBaseProps> {}

export const ColorPickerAreaThumb = withContext<
  HTMLDivElement,
  ColorPickerAreaThumbProps
>(ArkColorPicker.AreaThumb, "areaThumb", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelSliderProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ChannelSliderBaseProps> {}

export const ColorPickerChannelSlider = withContext<
  HTMLDivElement,
  ColorPickerChannelSliderProps
>(ArkColorPicker.ChannelSlider, "channelSlider", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelSliderTrackProps
  extends HTMLAgniflowProps<
    "div",
    ArkColorPicker.ChannelSliderTrackBaseProps
  > {}

export const ColorPickerChannelSliderTrack = withContext<
  HTMLDivElement,
  ColorPickerChannelSliderTrackProps
>(ArkColorPicker.ChannelSliderTrack, "channelSliderTrack", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelSliderThumbProps
  extends HTMLAgniflowProps<
    "div",
    ArkColorPicker.ChannelSliderThumbBaseProps
  > {}

export const ColorPickerChannelSliderThumb = withContext<
  HTMLDivElement,
  ColorPickerChannelSliderThumbProps
>(ArkColorPicker.ChannelSliderThumb, "channelSliderThumb", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelInputProps
  extends HTMLAgniflowProps<"input", ArkColorPicker.ChannelInputBaseProps> {}

export const ColorPickerChannelInput = withContext<
  HTMLInputElement,
  ColorPickerChannelInputProps
>(ArkColorPicker.ChannelInput, "channelInput", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerTransparencyGridProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.TransparencyGridBaseProps> {}

export const ColorPickerTransparencyGrid = withContext<
  HTMLDivElement,
  ColorPickerTransparencyGridProps
>(ArkColorPicker.TransparencyGrid, "transparencyGrid", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerSwatchGroupProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.SwatchGroupBaseProps> {}

export const ColorPickerSwatchGroup = withContext<
  HTMLDivElement,
  ColorPickerSwatchGroupProps
>(ArkColorPicker.SwatchGroup, "swatchGroup", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerSwatchTriggerProps
  extends HTMLAgniflowProps<"button", ArkColorPicker.SwatchTriggerBaseProps> {}

export const ColorPickerSwatchTrigger = withContext<
  HTMLButtonElement,
  ColorPickerSwatchTriggerProps
>(ArkColorPicker.SwatchTrigger, "swatchTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerSwatchProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.SwatchBaseProps> {}

export const ColorPickerSwatch = withContext<
  HTMLDivElement,
  ColorPickerSwatchProps
>(ArkColorPicker.Swatch, "swatch", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerSwatchIndicatorProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.SwatchIndicatorBaseProps> {}

export const ColorPickerSwatchIndicator = withContext<
  HTMLDivElement,
  ColorPickerSwatchIndicatorProps
>(ArkColorPicker.SwatchIndicator, "swatchIndicator", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerValueTextProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ValueTextBaseProps> {}

export const ColorPickerValueText = withContext<
  HTMLDivElement,
  ColorPickerValueTextProps
>(ArkColorPicker.ValueText, "valueText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerValueSwatchProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ValueSwatchBaseProps> {}

export const ColorPickerValueSwatch = withContext<
  HTMLDivElement,
  ColorPickerValueSwatchProps
>(ArkColorPicker.ValueSwatch, "swatch", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerViewProps
  extends HTMLAgniflowProps<"div", ArkColorPicker.ViewBaseProps> {}

export const ColorPickerView = withContext<
  HTMLDivElement,
  ColorPickerViewProps
>(ArkColorPicker.View, "view", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerFormatTriggerProps
  extends HTMLAgniflowProps<"button", ArkColorPicker.FormatTriggerBaseProps> {}

export const ColorPickerFormatTrigger = withContext<
  HTMLButtonElement,
  ColorPickerFormatTriggerProps
>(ArkColorPicker.FormatTrigger, "formatTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerFormatSelectProps
  extends HTMLAgniflowProps<"select", ArkColorPicker.FormatSelectBaseProps> {}

export const ColorPickerFormatSelect = withContext<
  HTMLSelectElement,
  ColorPickerFormatSelectProps
>(ArkColorPicker.FormatSelect, "formatSelect", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerEyeDropperTriggerProps
  extends HTMLAgniflowProps<
    "button",
    ArkColorPicker.EyeDropperTriggerBaseProps
  > {}

export const ColorPickerEyeDropperTrigger = withContext<
  HTMLButtonElement,
  ColorPickerEyeDropperTriggerProps
>(ArkColorPicker.EyeDropperTrigger, "eyeDropperTrigger", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelSliderValueTextProps
  extends HTMLAgniflowProps<
    "div",
    ArkColorPicker.ChannelSliderValueTextBaseProps
  > {}

export const ColorPickerChannelSliderValueText = withContext<
  HTMLDivElement,
  ColorPickerChannelSliderValueTextProps
>(ArkColorPicker.ChannelSliderValueText, "channelSliderValueText", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export interface ColorPickerChannelSliderLabelProps
  extends HTMLAgniflowProps<
    "div",
    ArkColorPicker.ChannelSliderLabelBaseProps
  > {}

export const ColorPickerChannelSliderLabel = withContext<
  HTMLDivElement,
  ColorPickerChannelSliderLabelProps
>(ArkColorPicker.ChannelSliderLabel, "channelSliderLabel", {
  forwardAsChild: true,
})

////////////////////////////////////////////////////////////////////////////////////

export const ColorPickerHiddenInput = ArkColorPicker.HiddenInput

export const ColorPickerContext = ArkColorPicker.Context

export interface ColorPickerValueChangeDetails
  extends ArkColorPicker.ValueChangeDetails {}
