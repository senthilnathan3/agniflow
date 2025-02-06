"use client"

import type { ButtonProps, RecipeProps } from "@agniflow-ui/react"
import {
  FileUpload as AgniflowFileUpload,
  Button,
  Icon,
  IconButton,
  Span,
  Text,
  useFileUploadContext,
  useRecipe,
} from "@agniflow-ui/react"
import * as React from "react"
import { LuFile, LuUpload, LuX } from "react-icons/lu"

export interface FileUploadRootProps extends AgniflowFileUpload.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const FileUploadRoot = React.forwardRef<
  HTMLInputElement,
  FileUploadRootProps
>(function FileUploadRoot(props, ref) {
  const { children, inputProps, ...rest } = props
  return (
    <AgniflowFileUpload.Root {...rest}>
      <AgniflowFileUpload.HiddenInput ref={ref} {...inputProps} />
      {children}
    </AgniflowFileUpload.Root>
  )
})

export interface FileUploadDropzoneProps
  extends AgniflowFileUpload.DropzoneProps {
  label: React.ReactNode
  description?: React.ReactNode
}

export const FileUploadDropzone = React.forwardRef<
  HTMLInputElement,
  FileUploadDropzoneProps
>(function FileUploadDropzone(props, ref) {
  const { children, label, description, ...rest } = props
  return (
    <AgniflowFileUpload.Dropzone ref={ref} {...rest}>
      <Icon fontSize="xl" color="fg.muted">
        <LuUpload />
      </Icon>
      <AgniflowFileUpload.DropzoneContent>
        <div>{label}</div>
        {description && <Text color="fg.muted">{description}</Text>}
      </AgniflowFileUpload.DropzoneContent>
      {children}
    </AgniflowFileUpload.Dropzone>
  )
})

interface VisibilityProps {
  showSize?: boolean
  clearable?: boolean
}

interface FileUploadItemProps extends VisibilityProps {
  file: File
}

const FileUploadItem = React.forwardRef<HTMLLIElement, FileUploadItemProps>(
  function FileUploadItem(props, ref) {
    const { file, showSize, clearable } = props
    return (
      <AgniflowFileUpload.Item file={file} ref={ref}>
        <AgniflowFileUpload.ItemPreview asChild>
          <Icon fontSize="lg" color="fg.muted">
            <LuFile />
          </Icon>
        </AgniflowFileUpload.ItemPreview>

        {showSize ? (
          <AgniflowFileUpload.ItemContent>
            <AgniflowFileUpload.ItemName />
            <AgniflowFileUpload.ItemSizeText />
          </AgniflowFileUpload.ItemContent>
        ) : (
          <AgniflowFileUpload.ItemName flex="1" />
        )}

        {clearable && (
          <AgniflowFileUpload.ItemDeleteTrigger asChild>
            <IconButton variant="ghost" color="fg.muted" size="xs">
              <LuX />
            </IconButton>
          </AgniflowFileUpload.ItemDeleteTrigger>
        )}
      </AgniflowFileUpload.Item>
    )
  },
)

interface FileUploadListProps
  extends VisibilityProps,
    AgniflowFileUpload.ItemGroupProps {
  files?: File[]
}

export const FileUploadList = React.forwardRef<
  HTMLUListElement,
  FileUploadListProps
>(function FileUploadList(props, ref) {
  const { showSize, clearable, files, ...rest } = props

  const fileUpload = useFileUploadContext()
  const acceptedFiles = files ?? fileUpload.acceptedFiles

  if (acceptedFiles.length === 0) return null

  return (
    <AgniflowFileUpload.ItemGroup ref={ref} {...rest}>
      {acceptedFiles.map((file) => (
        <FileUploadItem
          key={file.name}
          file={file}
          showSize={showSize}
          clearable={clearable}
        />
      ))}
    </AgniflowFileUpload.ItemGroup>
  )
})

type Assign<T, U> = Omit<T, keyof U> & U

interface FileInputProps extends Assign<ButtonProps, RecipeProps<"input">> {
  placeholder?: React.ReactNode
}

export const FileInput = React.forwardRef<HTMLButtonElement, FileInputProps>(
  function FileInput(props, ref) {
    const inputRecipe = useRecipe({ key: "input" })
    const [recipeProps, restProps] = inputRecipe.splitVariantProps(props)
    const { placeholder = "Select file(s)", ...rest } = restProps
    return (
      <AgniflowFileUpload.Trigger asChild>
        <Button
          unstyled
          py="0"
          ref={ref}
          {...rest}
          css={[inputRecipe(recipeProps), props.css]}
        >
          <AgniflowFileUpload.Context>
            {({ acceptedFiles }) => {
              if (acceptedFiles.length === 1) {
                return <span>{acceptedFiles[0].name}</span>
              }
              if (acceptedFiles.length > 1) {
                return <span>{acceptedFiles.length} files</span>
              }
              return <Span color="fg.subtle">{placeholder}</Span>
            }}
          </AgniflowFileUpload.Context>
        </Button>
      </AgniflowFileUpload.Trigger>
    )
  },
)

export const FileUploadLabel = AgniflowFileUpload.Label
export const FileUploadClearTrigger = AgniflowFileUpload.ClearTrigger
export const FileUploadTrigger = AgniflowFileUpload.Trigger
