"use client"

import type { CollectionItem } from "@agniflow-ui/react"
import { Select as AgniflowSelect, Portal } from "@agniflow-ui/react"
import { CloseButton } from "compositions/ui/close-button"
import * as React from "react"

interface SelectTriggerProps extends AgniflowSelect.ControlProps {
  clearable?: boolean
}

export const SelectTrigger = React.forwardRef<
  HTMLButtonElement,
  SelectTriggerProps
>(function SelectTrigger(props, ref) {
  const { children, clearable, ...rest } = props
  return (
    <AgniflowSelect.Control {...rest}>
      <AgniflowSelect.Trigger ref={ref}>{children}</AgniflowSelect.Trigger>
      <AgniflowSelect.IndicatorGroup>
        {clearable && <SelectClearTrigger />}
        <AgniflowSelect.Indicator />
      </AgniflowSelect.IndicatorGroup>
    </AgniflowSelect.Control>
  )
})

const SelectClearTrigger = React.forwardRef<
  HTMLButtonElement,
  AgniflowSelect.ClearTriggerProps
>(function SelectClearTrigger(props, ref) {
  return (
    <AgniflowSelect.ClearTrigger asChild {...props} ref={ref}>
      <CloseButton
        size="xs"
        variant="plain"
        focusVisibleRing="inside"
        focusRingWidth="2px"
        pointerEvents="auto"
      />
    </AgniflowSelect.ClearTrigger>
  )
})

interface SelectContentProps extends AgniflowSelect.ContentProps {
  portalled?: boolean
  portalRef?: React.RefObject<HTMLElement>
}

export const SelectContent = React.forwardRef<
  HTMLDivElement,
  SelectContentProps
>(function SelectContent(props, ref) {
  const { portalled = true, portalRef, ...rest } = props
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <AgniflowSelect.Positioner>
        <AgniflowSelect.Content {...rest} ref={ref} />
      </AgniflowSelect.Positioner>
    </Portal>
  )
})

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  AgniflowSelect.ItemProps
>(function SelectItem(props, ref) {
  const { item, children, ...rest } = props
  return (
    <AgniflowSelect.Item key={item.value} item={item} {...rest} ref={ref}>
      {children}
      <AgniflowSelect.ItemIndicator />
    </AgniflowSelect.Item>
  )
})

interface SelectValueTextProps
  extends Omit<AgniflowSelect.ValueTextProps, "children"> {
  children?(items: CollectionItem[]): React.ReactNode
}

export const SelectValueText = React.forwardRef<
  HTMLSpanElement,
  SelectValueTextProps
>(function SelectValueText(props, ref) {
  const { children, ...rest } = props
  return (
    <AgniflowSelect.ValueText {...rest} ref={ref}>
      <AgniflowSelect.Context>
        {(select) => {
          const items = select.selectedItems
          if (items.length === 0) return props.placeholder
          if (children) return children(items)
          if (items.length === 1)
            return select.collection.stringifyItem(items[0])
          return `${items.length} selected`
        }}
      </AgniflowSelect.Context>
    </AgniflowSelect.ValueText>
  )
})

export const SelectRoot = React.forwardRef<
  HTMLDivElement,
  AgniflowSelect.RootProps
>(function SelectRoot(props, ref) {
  return (
    <AgniflowSelect.Root
      {...props}
      ref={ref}
      positioning={{ sameWidth: true, ...props.positioning }}
    >
      {props.asChild ? (
        props.children
      ) : (
        <>
          <AgniflowSelect.HiddenSelect />
          {props.children}
        </>
      )}
    </AgniflowSelect.Root>
  )
}) as AgniflowSelect.RootComponent

interface SelectItemGroupProps extends AgniflowSelect.ItemGroupProps {
  label: React.ReactNode
}

export const SelectItemGroup = React.forwardRef<
  HTMLDivElement,
  SelectItemGroupProps
>(function SelectItemGroup(props, ref) {
  const { children, label, ...rest } = props
  return (
    <AgniflowSelect.ItemGroup {...rest} ref={ref}>
      <AgniflowSelect.ItemGroupLabel>{label}</AgniflowSelect.ItemGroupLabel>
      {children}
    </AgniflowSelect.ItemGroup>
  )
})

export const SelectLabel = AgniflowSelect.Label
export const SelectItemText = AgniflowSelect.ItemText
