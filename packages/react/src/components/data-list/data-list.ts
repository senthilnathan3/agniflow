"use client"

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
  useStyles: useDataListStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "dataList" })

export { useDataListStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface DataListRootBaseProps
  extends SlotRecipeProps<"dataList">,
    UnstyledProp {}

export interface DataListRootProps
  extends HTMLAgniflowProps<"dl", DataListRootBaseProps> {}

export const DataListRoot = withProvider<HTMLDListElement, DataListRootProps>(
  "dl",
  "root",
)

export const DataListPropsProvider =
  PropsProvider as React.Provider<DataListRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface DataListItemProps extends HTMLAgniflowProps<"div"> {}

export const DataListItem = withContext<HTMLDivElement, DataListItemProps>(
  "div",
  "item",
)

////////////////////////////////////////////////////////////////////////////////////

export interface DataListItemLabelProps extends HTMLAgniflowProps<"dt"> {}

export const DataListItemLabel = withContext<
  HTMLDivElement,
  DataListItemLabelProps
>("dt", "itemLabel")

////////////////////////////////////////////////////////////////////////////////////

export interface DataListItemValueProps extends HTMLAgniflowProps<"dd"> {}

export const DataListItemValue = withContext<
  HTMLDivElement,
  DataListItemValueProps
>("dd", "itemValue")
