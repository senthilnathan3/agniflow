import type { Assign } from "@ark-ui/react"
import {
  Presence as ArkPresence,
  type PresenceProps as ArkPresenceProps,
} from "@ark-ui/react/presence"
import { type HTMLAgniflowProps, chakra } from "../../styled-system"

export interface PresenceProps
  extends Assign<HTMLAgniflowProps<"div">, ArkPresenceProps> {}

export const Presence = chakra(ArkPresence)
