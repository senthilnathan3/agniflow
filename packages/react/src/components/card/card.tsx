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
  useStyles: useCardStyles,
  PropsProvider,
} = createSlotRecipeContext({ key: "card" })

export { useCardStyles }

////////////////////////////////////////////////////////////////////////////////////

export interface CardRootBaseProps
  extends SlotRecipeProps<"card">,
    UnstyledProp {}

export interface CardRootProps
  extends HTMLAgniflowProps<"div", CardRootBaseProps> {}

export const CardRoot = withProvider<HTMLDivElement, CardRootProps>(
  "div",
  "root",
)

////////////////////////////////////////////////////////////////////////////////////

export const CardPropsProvider =
  PropsProvider as React.Provider<CardRootBaseProps>

////////////////////////////////////////////////////////////////////////////////////

export interface CardBodyProps extends HTMLAgniflowProps<"div"> {}

export const CardBody = withContext<HTMLDivElement, CardBodyProps>(
  "div",
  "body",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardHeaderProps extends HTMLAgniflowProps<"div"> {}

export const CardHeader = withContext<HTMLDivElement, CardHeaderProps>(
  "div",
  "header",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardFooterProps extends HTMLAgniflowProps<"div"> {}

export const CardFooter = withContext<HTMLDivElement, CardFooterProps>(
  "div",
  "footer",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardTitleProps extends HTMLAgniflowProps<"h2"> {}

export const CardTitle = withContext<HTMLHeadingElement, CardTitleProps>(
  "h3",
  "title",
)

////////////////////////////////////////////////////////////////////////////////////

export interface CardDescriptionProps extends HTMLAgniflowProps<"p"> {}

export const CardDescription = withContext<
  HTMLParagraphElement,
  CardDescriptionProps
>("p", "description")
