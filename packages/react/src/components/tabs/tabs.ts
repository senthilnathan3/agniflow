"use client"

import type { Assign } from "@ark-ui/react"
import { Tabs as ArkTabs } from "@ark-ui/react/tabs"
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
  useStyles: useTabsStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "tabs" })

export { useTabsStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface TabsRootProviderBaseProps
  extends Assign<ArkTabs.RootProviderBaseProps, SlotRecipeProps<"tabs">>,
    UnstyledProp {}

export interface TabsRootProviderProps
  extends HTMLAgniflowProps<"div", TabsRootProviderBaseProps> {}

export const TabsRootProvider = withProvider<
  HTMLDivElement,
  TabsRootProviderProps
>(ArkTabs.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface TabsRootBaseProps
  extends Assign<ArkTabs.RootBaseProps, SlotRecipeProps<"tabs">>,
    UnstyledProp {}

export interface TabsRootProps
  extends HTMLAgniflowProps<"div", TabsRootBaseProps> {}

export const TabsRoot = withProvider<HTMLDivElement, TabsRootProps>(
  ArkTabs.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const TabsPropsProvider =
  PropsProvider as React.Provider<TabsRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface TabsTriggerProps
  extends HTMLAgniflowProps<"button", ArkTabs.TriggerBaseProps> {}

export const TabsTrigger = withContext<HTMLButtonElement, TabsTriggerProps>(
  ArkTabs.Trigger,
  "trigger",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsContentProps
  extends HTMLAgniflowProps<"div", ArkTabs.ContentBaseProps> {}

export const TabsContent = withContext<HTMLDivElement, TabsContentProps>(
  ArkTabs.Content,
  "content",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsContentGroupProps extends HTMLAgniflowProps<"div"> {}

export const TabsContentGroup = withContext<
  HTMLDivElement,
  TabsContentGroupProps
>("div", "contentGroup")

////////////////////////////////////////////////////////////////////////////////////

export interface TabsListProps
  extends HTMLAgniflowProps<"div", ArkTabs.ListBaseProps> {}

export const TabsList = withContext<HTMLDivElement, TabsListProps>(
  ArkTabs.List,
  "list",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface TabsIndicatorProps
  extends HTMLAgniflowProps<"div", ArkTabs.ListBaseProps> {}

export const TabsIndicator = withContext<HTMLDivElement, TabsIndicatorProps>(
  ArkTabs.Indicator,
  "indicator",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const TabsContext = ArkTabs.Context

export interface TabsValueChangeDetails extends ArkTabs.ValueChangeDetails {}
