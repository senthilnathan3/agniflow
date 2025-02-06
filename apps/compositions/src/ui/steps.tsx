import { Steps as AgniflowSteps, Box } from "@agniflow-ui/react"
import * as React from "react"
import { LuCheck } from "react-icons/lu"

interface StepInfoProps {
  title?: React.ReactNode
  description?: React.ReactNode
}

export interface StepsItemProps
  extends Omit<AgniflowSteps.ItemProps, "title">,
    StepInfoProps {
  completedIcon?: React.ReactNode
  icon?: React.ReactNode
}

export const StepsItem = React.forwardRef<HTMLDivElement, StepsItemProps>(
  function StepsItem(props, ref) {
    const { title, description, completedIcon, icon, ...rest } = props
    return (
      <AgniflowSteps.Item {...rest} ref={ref}>
        <AgniflowSteps.Trigger>
          <AgniflowSteps.Indicator>
            <AgniflowSteps.Status
              complete={completedIcon || <LuCheck />}
              incomplete={icon || <AgniflowSteps.Number />}
            />
          </AgniflowSteps.Indicator>
          <StepInfo title={title} description={description} />
        </AgniflowSteps.Trigger>
        <AgniflowSteps.Separator />
      </AgniflowSteps.Item>
    )
  },
)

const StepInfo = (props: StepInfoProps) => {
  const { title, description } = props

  if (title && description) {
    return (
      <Box>
        <AgniflowSteps.Title>{title}</AgniflowSteps.Title>
        <AgniflowSteps.Description>{description}</AgniflowSteps.Description>
      </Box>
    )
  }

  return (
    <>
      {title && <AgniflowSteps.Title>{title}</AgniflowSteps.Title>}
      {description && (
        <AgniflowSteps.Description>{description}</AgniflowSteps.Description>
      )}
    </>
  )
}

interface StepsIndicatorProps {
  completedIcon: React.ReactNode
  icon?: React.ReactNode
}

export const StepsIndicator = React.forwardRef<
  HTMLDivElement,
  StepsIndicatorProps
>(function StepsIndicator(props, ref) {
  const { icon = <AgniflowSteps.Number />, completedIcon } = props
  return (
    <AgniflowSteps.Indicator ref={ref}>
      <AgniflowSteps.Status complete={completedIcon} incomplete={icon} />
    </AgniflowSteps.Indicator>
  )
})

export const StepsList = AgniflowSteps.List
export const StepsRoot = AgniflowSteps.Root
export const StepsContent = AgniflowSteps.Content
export const StepsCompletedContent = AgniflowSteps.CompletedContent

export const StepsNextTrigger = AgniflowSteps.NextTrigger
export const StepsPrevTrigger = AgniflowSteps.PrevTrigger
