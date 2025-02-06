import { Button, ButtonGroup } from "@agniflow-ui/react"

export const ButtonWithGroup = () => {
  return (
    <ButtonGroup size="sm" variant="outline">
      <Button colorPalette="blue">Save</Button>
      <Button>Cancel</Button>
    </ButtonGroup>
  )
}
