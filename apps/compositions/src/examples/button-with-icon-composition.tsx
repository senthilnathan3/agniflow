import { Button, Icon } from "@agniflow-ui/react"
import { LuPlus } from "react-icons/lu"

export const ButtonWithIconComposition = () => {
  return (
    <Button>
      <Icon color="yellow" size="inherit">
        <LuPlus />
      </Icon>
      Button
      <Icon color="pink" size="inherit">
        <LuPlus />
      </Icon>
    </Button>
  )
}
