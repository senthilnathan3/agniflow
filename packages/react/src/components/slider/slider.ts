"use client"

import type { Assign } from "@ark-ui/react"
import { Slider as ArkSlider } from "@ark-ui/react/slider"
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
  useStyles: useSliderStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "slider" })

export { useSliderStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface SliderRootProviderBaseProps
  extends Assign<ArkSlider.RootProviderBaseProps, SlotRecipeProps<"slider">>,
    UnstyledProp {}

export interface SliderRootProviderProps
  extends HTMLAgniflowProps<"div", SliderRootProviderBaseProps> {}

export const SliderRootProvider = withProvider<
  HTMLDivElement,
  SliderRootProviderProps
>(ArkSlider.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SliderRootBaseProps
  extends Assign<ArkSlider.RootBaseProps, SlotRecipeProps<"slider">>,
    UnstyledProp {}

export interface SliderRootProps
  extends HTMLAgniflowProps<"div", SliderRootBaseProps> {}

export const SliderRoot = withProvider<HTMLDivElement, SliderRootProps>(
  ArkSlider.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const SliderPropsProvider =
  PropsProvider as React.Provider<SliderRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface SliderControlProps
  extends HTMLAgniflowProps<"div", ArkSlider.ControlBaseProps> {}

export const SliderControl = withContext<HTMLDivElement, SliderControlProps>(
  ArkSlider.Control,
  "control",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderTrackProps
  extends HTMLAgniflowProps<"div", ArkSlider.TrackBaseProps> {}

export const SliderTrack = withContext<HTMLDivElement, SliderTrackProps>(
  ArkSlider.Track,
  "track",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderRangeProps
  extends HTMLAgniflowProps<"div", ArkSlider.RangeBaseProps> {}

export const SliderRange = withContext<HTMLDivElement, SliderRangeProps>(
  ArkSlider.Range,
  "range",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderThumbProps
  extends HTMLAgniflowProps<"div", ArkSlider.ThumbBaseProps> {}

export const SliderThumb = withContext<HTMLDivElement, SliderThumbProps>(
  ArkSlider.Thumb,
  "thumb",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderValueTextProps
  extends HTMLAgniflowProps<"div", ArkSlider.ValueTextBaseProps> {}

export const SliderValueText = withContext<
  HTMLDivElement,
  SliderValueTextProps
>(ArkSlider.ValueText, "valueText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SliderLabelProps
  extends HTMLAgniflowProps<"label", ArkSlider.LabelBaseProps> {}

export const SliderLabel = withContext<HTMLLabelElement, SliderLabelProps>(
  ArkSlider.Label,
  "label",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderMarkerGroupProps
  extends HTMLAgniflowProps<"div", ArkSlider.MarkerGroupBaseProps> {}

export const SliderMarkerGroup = withContext<
  HTMLDivElement,
  SliderMarkerGroupProps
>(ArkSlider.MarkerGroup, "markerGroup", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface SliderMarkerProps
  extends HTMLAgniflowProps<"div", ArkSlider.MarkerBaseProps> {}

export const SliderMarker = withContext<HTMLDivElement, SliderMarkerProps>(
  ArkSlider.Marker,
  "marker",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface SliderMarkerIndicatorProps extends HTMLAgniflowProps<"div"> {}

export const SliderMarkerIndicator = withContext<
  HTMLDivElement,
  SliderMarkerIndicatorProps
>("div", "markerIndicator")

////////////////////////////////////////////////////////////////////////////////////

export interface SliderDraggingIndicatorProps
  extends HTMLAgniflowProps<"div", ArkSlider.DraggingIndicatorBaseProps> {}

export const SliderDraggingIndicator = withContext<
  HTMLDivElement,
  SliderDraggingIndicatorProps
>(ArkSlider.DraggingIndicator, "draggingIndicator", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const SliderContext = ArkSlider.Context
export const SliderHiddenInput = ArkSlider.HiddenInput

export interface SliderValueChangeDetails
  extends ArkSlider.ValueChangeDetails {}
