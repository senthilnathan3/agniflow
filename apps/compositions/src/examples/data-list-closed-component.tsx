import { DataList as AgniflowDataList } from "@agniflow-ui/react"
import { InfoTip } from "compositions/ui/toggle-tip"
import * as React from "react"

export const DataListRoot = AgniflowDataList.Root

interface ItemProps extends AgniflowDataList.ItemProps {
  label: React.ReactNode
  value: React.ReactNode
  info?: React.ReactNode
  grow?: boolean
}

export const DataListItem = React.forwardRef<HTMLDivElement, ItemProps>(
  function DataListItem(props, ref) {
    const { label, info, value, children, grow, ...rest } = props
    return (
      <AgniflowDataList.Item ref={ref} {...rest}>
        <AgniflowDataList.ItemLabel flex={grow ? "1" : undefined}>
          {label}
          {info && <InfoTip>{info}</InfoTip>}
        </AgniflowDataList.ItemLabel>
        <AgniflowDataList.ItemValue flex={grow ? "1" : undefined}>
          {value}
        </AgniflowDataList.ItemValue>
        {children}
      </AgniflowDataList.Item>
    )
  },
)
