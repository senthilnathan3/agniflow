"use client"

import { forwardRef } from "react"
import {
  type HTMLAgniflowProps,
  type SlotRecipeProps,
  type UnstyledProp,
  chakra,
  createSlotRecipeContext,
  useSlotRecipe,
} from "../../styled-system"
import { ArrowDownIcon, ArrowUpIcon } from "../icons"

////////////////////////////////////////////////////////////////////////////////////

const {
  withProvider,
  withContext,
  useStyles: useStatStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "stat" })

export { useStatStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface StatRootBaseProps
  extends SlotRecipeProps<"stat">,
    UnstyledProp {}

export interface StatRootProps
  extends HTMLAgniflowProps<"dl", StatRootBaseProps> {}

export const StatRoot = withProvider<HTMLDListElement, StatRootProps>(
  "dl",
  "root",
)

export const StatPropsProvider =
  PropsProvider as React.Provider<StatRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface StatLabelProps extends HTMLAgniflowProps<"dt"> {}

export const StatLabel = withContext<HTMLElement, StatLabelProps>("dt", "label")

////////////////////////////////////////////////////////////////////////////////////

export interface StatValueTextProps extends HTMLAgniflowProps<"dd"> {}

export const StatValueText = withContext<HTMLElement, StatValueTextProps>(
  "dd",
  "valueText",
)

////////////////////////////////////////////////////////////////////////////////////

export interface StatHelpTextProps extends HTMLAgniflowProps<"span"> {}

export const StatHelpText = withContext<HTMLElement, StatHelpTextProps>(
  "span",
  "helpText",
)

////////////////////////////////////////////////////////////////////////////////////

export interface StatValueUnitProps extends HTMLAgniflowProps<"span"> {}

export const StatValueUnit = withContext<HTMLElement, StatValueUnitProps>(
  "span",
  "valueUnit",
)

////////////////////////////////////////////////////////////////////////////////////

export interface StatUpIndicatorProps extends HTMLAgniflowProps<"span"> {}

export const StatUpIndicator = withContext<HTMLElement, StatUpIndicatorProps>(
  "span",
  "indicator",
  {
    defaultProps: {
      "data-type": "up",
      children: <ArrowUpIcon />,
    },
  },
)

////////////////////////////////////////////////////////////////////////////////////

export interface StatDownIndicatorProps extends HTMLAgniflowProps<"span"> {}

export const StatDownIndicator = withContext<
  HTMLElement,
  StatDownIndicatorProps
>("span", "indicator", {
  defaultProps: {
    "data-type": "down",
    children: <ArrowDownIcon />,
  },
})

////////////////////////////////////////////////////////////////////////////////////

export interface StatGroupProps
  extends SlotRecipeProps<"stat">,
    HTMLAgniflowProps<"div"> {}

export const StatGroup = forwardRef<HTMLDivElement, StatGroupProps>(
  function StatGroup(props, ref) {
    const recipe = useSlotRecipe({ key: "stat" })
    const [variantProps, localProps] = recipe.splitVariantProps(props)
    return (
      <PropsProvider value={variantProps}>
        <chakra.div
          ref={ref}
          role="group"
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          alignItems="flex-start"
          {...localProps}
        />
      </PropsProvider>
    )
  },
)
