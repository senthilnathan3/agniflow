"use client"

import type { Assign } from "@ark-ui/react"
import {
  RadioGroup as ArkRadioGroup,
  type UseRadioGroupContext,
  type UseRadioGroupItemContext,
} from "@ark-ui/react/radio-group"
import type { JSX } from "react"
import { forwardRef } from "react"
import {
  type HTMLAgniflowProps,
  type SlotRecipeProps,
  type UnstyledProp,
  createSlotRecipeContext,
} from "../../styled-system"
import { Radiomark } from "../radiomark"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useRadioGroupStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "radioGroup" })

export { useRadioGroupStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupRootProviderBaseProps
  extends Assign<
      ArkRadioGroup.RootProviderBaseProps,
      SlotRecipeProps<"radioGroup">
    >,
    UnstyledProp {}

export interface RadioGroupRootProviderProps
  extends HTMLAgniflowProps<"div", RadioGroupRootProviderBaseProps> {}

export const RadioGroupRootProvider = withProvider<
  HTMLDivElement,
  RadioGroupRootProviderProps
>(ArkRadioGroup.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupRootBaseProps
  extends Assign<ArkRadioGroup.RootBaseProps, SlotRecipeProps<"radioGroup">>,
    UnstyledProp {}

export interface RadioGroupRootProps
  extends HTMLAgniflowProps<"div", RadioGroupRootBaseProps> {}

export const RadioGroupRoot = withProvider<HTMLDivElement, RadioGroupRootProps>(
  ArkRadioGroup.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const RadioGroupPropsProvider =
  PropsProvider as React.Provider<RadioGroupRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupLabelProps
  extends HTMLAgniflowProps<"div", ArkRadioGroup.LabelBaseProps> {}

export const RadioGroupLabel = withContext<
  HTMLDivElement,
  RadioGroupLabelProps
>(ArkRadioGroup.Label, "label", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupItemProps
  extends HTMLAgniflowProps<"div", ArkRadioGroup.ItemBaseProps> {}

export const RadioGroupItem = withContext<HTMLDivElement, RadioGroupItemProps>(
  ArkRadioGroup.Item,
  "item",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupItemTextProps
  extends HTMLAgniflowProps<"span", ArkRadioGroup.ItemTextBaseProps> {}

export const RadioGroupItemText = withContext<
  HTMLSpanElement,
  RadioGroupItemTextProps
>(ArkRadioGroup.ItemText, "itemText", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupItemControlProps
  extends HTMLAgniflowProps<"div", ArkRadioGroup.ItemControlBaseProps> {}

export const RadioGroupItemControl = withContext<
  HTMLDivElement,
  RadioGroupItemControlProps
>(ArkRadioGroup.ItemControl, "itemControl", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupItemIndicatorProps
  extends HTMLAgniflowProps<"span"> {}

export const RadioGroupItemIndicator = forwardRef<
  HTMLSpanElement,
  RadioGroupItemIndicatorProps
>(function RadioGroupItemIndicator(props, ref) {
  const styles = useRadioGroupStyles()
  return (
    <ArkRadioGroup.ItemContext>
      {(itemState) => (
        <ArkRadioGroup.ItemControl asChild>
          <Radiomark
            ref={ref}
            unstyled
            {...props}
            checked={itemState.checked}
            disabled={itemState.disabled}
            css={[styles["itemControl"], props.css]}
          />
        </ArkRadioGroup.ItemControl>
      )}
    </ArkRadioGroup.ItemContext>
  )
})

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupContextProps {
  children: (context: UseRadioGroupContext) => JSX.Element
}

export const RadioGroupContext: React.FC<RadioGroupContextProps> =
  ArkRadioGroup.Context

////////////////////////////////////////////////////////////////////////////////////

export interface RadioGroupItemContextProps {
  children: (context: UseRadioGroupItemContext) => JSX.Element
}

export const RadioGroupItemContext: React.FC<RadioGroupItemContextProps> =
  ArkRadioGroup.ItemContext

////////////////////////////////////////////////////////////////////////////////////

export const RadioGroupItemHiddenInput = ArkRadioGroup.ItemHiddenInput

export interface RadioGroupValueChangeDetails
  extends ArkRadioGroup.ValueChangeDetails {}
