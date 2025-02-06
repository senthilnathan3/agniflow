import type {
  HTMLAgniflowProps,
  RecipeVariantProps,
  UnstyledProp,
} from "@agniflow-ui/react"
import { createRecipeContext, defineRecipe } from "@agniflow-ui/react"

const buttonRecipe = defineRecipe({
  className: "button",
  base: {
    padding: "10px",
    borderRadius: "4px",
    backgroundColor: "red",
    color: "white",
  },
  variants: {
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
  },
})

const { withContext } = createRecipeContext({
  recipe: buttonRecipe,
})

interface ButtonProps
  extends HTMLAgniflowProps<"button", RecipeVariantProps<typeof buttonRecipe>>,
    UnstyledProp {}

const Button = withContext<HTMLButtonElement, ButtonProps>("button")

export const SystemInlineRecipe = () => {
  return <Button bold>Welcome</Button>
}
