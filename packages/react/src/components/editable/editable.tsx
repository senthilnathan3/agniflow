"use client"

import type { Assign } from "@ark-ui/react"
import {
  Editable as ArkEditable,
  useEditableContext,
} from "@ark-ui/react/editable"
import { ark } from "@ark-ui/react/factory"
import { forwardRef } from "react"
import { mergeProps } from "../../merge-props"
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
  useStyles: useEditableStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "editable" })

export { useEditableStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface EditableRootProviderBaseProps
  extends Assign<
      ArkEditable.RootProviderBaseProps,
      SlotRecipeProps<"editable">
    >,
    UnstyledProp {}

export interface EditableRootProviderProps
  extends HTMLAgniflowProps<"div", EditableRootProviderBaseProps> {}

export const EditableRootProvider = withProvider<
  HTMLDivElement,
  EditableRootProviderProps
>(ArkEditable.RootProvider, "root", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableRootBaseProps
  extends Assign<ArkEditable.RootBaseProps, SlotRecipeProps<"editable">>,
    UnstyledProp {}

export interface EditableRootProps
  extends HTMLAgniflowProps<"div", EditableRootBaseProps> {}

export const EditableRoot = withProvider<HTMLDivElement, EditableRootProps>(
  ArkEditable.Root,
  "root",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export const EditablePropsProvider =
  PropsProvider as React.Provider<EditableRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface EditablePreviewProps
  extends HTMLAgniflowProps<"span", ArkEditable.PreviewBaseProps> {}

export const EditablePreview = withContext<
  HTMLSpanElement,
  EditablePreviewProps
>(ArkEditable.Preview, "preview", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableInputProps
  extends HTMLAgniflowProps<"input", ArkEditable.InputBaseProps> {}

export const EditableInput = withContext<HTMLInputElement, EditableInputProps>(
  ArkEditable.Input,
  "input",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface EditableTextareaProps
  extends HTMLAgniflowProps<"textarea", ArkEditable.InputBaseProps> {}

const ArkEditableTextarea = forwardRef<
  HTMLTextAreaElement,
  EditableTextareaProps
>(function EditableTextarea(props, ref) {
  const editable = useEditableContext()
  const mergedProps = mergeProps(editable.getInputProps(), props)
  return <ark.textarea ref={ref} {...mergedProps} />
})

export const EditableTextarea = withContext<
  HTMLInputElement,
  EditableTextareaProps
>(ArkEditableTextarea, "input", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableControlProps
  extends HTMLAgniflowProps<"div", ArkEditable.ControlBaseProps> {}

export const EditableControl = withContext<
  HTMLDivElement,
  EditableControlProps
>(ArkEditable.Control, "control", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableAreaProps
  extends HTMLAgniflowProps<"div", ArkEditable.AreaBaseProps> {}

export const EditableArea = withContext<HTMLDivElement, EditableAreaProps>(
  ArkEditable.Area,
  "area",
  { forwardAsChild: true },
)

////////////////////////////////////////////////////////////////////////////////////

export interface EditableEditTriggerProps
  extends HTMLAgniflowProps<"button", ArkEditable.EditTriggerBaseProps> {}

export const EditableEditTrigger = withContext<
  HTMLButtonElement,
  EditableEditTriggerProps
>(ArkEditable.EditTrigger, "editTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableSubmitTriggerProps
  extends HTMLAgniflowProps<"button", ArkEditable.SubmitTriggerBaseProps> {}

export const EditableSubmitTrigger = withContext<
  HTMLButtonElement,
  EditableSubmitTriggerProps
>(ArkEditable.SubmitTrigger, "submitTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export interface EditableCancelTriggerProps
  extends HTMLAgniflowProps<"button", ArkEditable.CancelTriggerBaseProps> {}

export const EditableCancelTrigger = withContext<
  HTMLButtonElement,
  EditableCancelTriggerProps
>(ArkEditable.CancelTrigger, "cancelTrigger", { forwardAsChild: true })

////////////////////////////////////////////////////////////////////////////////////

export const EditableContext = ArkEditable.Context

export interface EditableValueChangeDetails
  extends ArkEditable.ValueChangeDetails {}
