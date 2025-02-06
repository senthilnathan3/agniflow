import { HStack, Icon, Link, Stack, Text } from "@agniflow-ui/react"
import { Avatar } from "compositions/ui/avatar"
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "compositions/ui/hover-card"
import { LuChartLine } from "react-icons/lu"

export const HoverCardBasic = () => {
  return (
    <HoverCardRoot size="sm">
      <HoverCardTrigger asChild>
        <Link href="#">@agniflow_ui</Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <HoverCardArrow />
        <Stack gap="4" direction="row">
          <Avatar
            name="Agniflow UI"
            src="https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg"
          />
          <Stack gap="3">
            <Stack gap="1">
              <Text textStyle="sm" fontWeight="semibold">
                Agniflow UI
              </Text>
              <Text textStyle="sm" color="fg.muted">
                The most powerful toolkit for building modern web applications.
              </Text>
            </Stack>
            <HStack color="fg.subtle">
              <Icon size="sm">
                <LuChartLine />
              </Icon>
              <Text textStyle="xs">2.5M Downloads</Text>
            </HStack>
          </Stack>
        </Stack>
      </HoverCardContent>
    </HoverCardRoot>
  )
}
