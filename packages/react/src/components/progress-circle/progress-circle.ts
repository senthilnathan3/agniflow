"use client"

import type { Assign } from "@ark-ui/react"
import { Progress as ArkProgress } from "@ark-ui/react/progress"
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
  useStyles: useProgressCircleStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "progressCircle" })

export { useProgressCircleStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleRootProviderBaseProps
  extends Assign<
      ArkProgress.RootProviderBaseProps,
      SlotRecipeProps<"progressCircle">
    >,
    UnstyledProp {}

export interface ProgressCircleRootProviderProps
  extends HTMLAgniflowProps<"div", ProgressCircleRootProviderBaseProps> {}

export const ProgressCircleRootProvider = withProvider<
  HTMLDivElement,
  ProgressCircleRootProviderProps
>(ArkProgress.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleRootBaseProps
  extends Assign<ArkProgress.RootBaseProps, SlotRecipeProps<"progressCircle">>,
    UnstyledProp {}

export interface ProgressCircleRootProps
  extends HTMLAgniflowProps<"div", ProgressCircleRootBaseProps> {}

export const ProgressCircleRoot = withProvider<
  HTMLDivElement,
  ProgressCircleRootProps
>(ArkProgress.Root, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const ProgressCirclePropsProvider =
  PropsProvider as React.Provider<ProgressCircleRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleLabelProps
  extends HTMLAgniflowProps<"div", ArkProgress.LabelBaseProps> {}

export const ProgressCircleLabel = withContext<
  HTMLDivElement,
  ProgressCircleLabelProps
>(ArkProgress.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleCircleProps
  extends HTMLAgniflowProps<"svg", ArkProgress.CircleBaseProps> {}

export const ProgressCircleCircle = withContext<
  SVGSVGElement,
  ProgressCircleCircleProps
>(ArkProgress.Circle, "circle", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleTrackProps
  extends HTMLAgniflowProps<"circle", ArkProgress.TrackBaseProps> {}

export const ProgressCircleTrack = withContext<
  SVGCircleElement,
  ProgressCircleTrackProps
>(ArkProgress.CircleTrack, "circleTrack", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleRangeProps
  extends HTMLAgniflowProps<"circle", ArkProgress.RangeBaseProps> {}

export const ProgressCircleRange = withContext<
  SVGCircleElement,
  ProgressCircleRangeProps
>(ArkProgress.CircleRange, "circleRange", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface ProgressCircleValueTextProps
  extends HTMLAgniflowProps<"div", ArkProgress.ValueTextBaseProps> {}

export const ProgressCircleValueText = withContext<
  HTMLDivElement,
  ProgressCircleValueTextProps
>(ArkProgress.ValueText, "valueText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const ProgressCircleContext = ArkProgress.Context
