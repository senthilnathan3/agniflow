"use client"

import {
  AbsoluteCenter,
  Menu as AgniflowMenu,
  Portal,
} from "@agniflow-ui/react"
import * as React from "react"
import { LuCheck, LuChevronRight } from "react-icons/lu"

interface MenuContentProps extends AgniflowMenu.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const MenuContent = React.forwardRef<HTMLDivElement, MenuContentProps>(
  function MenuContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <AgniflowMenu.Positioner>
          <AgniflowMenu.Content ref={ref} {...rest} />
        </AgniflowMenu.Positioner>
      </Portal>
    )
  },
)

export const MenuArrow = React.forwardRef<
  HTMLDivElement,
  AgniflowMenu.ArrowProps
>(function MenuArrow(props, ref) {
  return (
    <AgniflowMenu.Arrow ref={ref} {...props}>
      <AgniflowMenu.ArrowTip />
    </AgniflowMenu.Arrow>
  )
})

export const MenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  AgniflowMenu.CheckboxItemProps
>(function MenuCheckboxItem(props, ref) {
  return (
    <AgniflowMenu.CheckboxItem ps="8" ref={ref} {...props}>
      <AbsoluteCenter axis="horizontal" insetStart="4" asChild>
        <AgniflowMenu.ItemIndicator>
          <LuCheck />
        </AgniflowMenu.ItemIndicator>
      </AbsoluteCenter>
      {props.children}
    </AgniflowMenu.CheckboxItem>
  )
})

export const MenuRadioItem = React.forwardRef<
  HTMLDivElement,
  AgniflowMenu.RadioItemProps
>(function MenuRadioItem(props, ref) {
  const { children, ...rest } = props
  return (
    <AgniflowMenu.RadioItem ps="8" ref={ref} {...rest}>
      <AbsoluteCenter axis="horizontal" insetStart="4" asChild>
        <AgniflowMenu.ItemIndicator>
          <LuCheck />
        </AgniflowMenu.ItemIndicator>
      </AbsoluteCenter>
      <AgniflowMenu.ItemText>{children}</AgniflowMenu.ItemText>
    </AgniflowMenu.RadioItem>
  )
})

export const MenuItemGroup = React.forwardRef<
  HTMLDivElement,
  AgniflowMenu.ItemGroupProps
>(function MenuItemGroup(props, ref) {
  const { title, children, ...rest } = props
  return (
    <AgniflowMenu.ItemGroup ref={ref} {...rest}>
      {title && (
        <AgniflowMenu.ItemGroupLabel userSelect="none">
          {title}
        </AgniflowMenu.ItemGroupLabel>
      )}
      {children}
    </AgniflowMenu.ItemGroup>
  )
})

export interface MenuTriggerItemProps extends AgniflowMenu.ItemProps {
  startIcon?: React.ReactNode
}

export const MenuTriggerItem = React.forwardRef<
  HTMLDivElement,
  MenuTriggerItemProps
>(function MenuTriggerItem(props, ref) {
  const { startIcon, children, ...rest } = props
  return (
    <AgniflowMenu.TriggerItem ref={ref} {...rest}>
      {startIcon}
      {children}
      <LuChevronRight />
    </AgniflowMenu.TriggerItem>
  )
})

export const MenuRadioItemGroup = AgniflowMenu.RadioItemGroup
export const MenuContextTrigger = AgniflowMenu.ContextTrigger
export const MenuRoot = AgniflowMenu.Root
export const MenuSeparator = AgniflowMenu.Separator

export const MenuItem = AgniflowMenu.Item
export const MenuItemText = AgniflowMenu.ItemText
export const MenuItemCommand = AgniflowMenu.ItemCommand
export const MenuTrigger = AgniflowMenu.Trigger
