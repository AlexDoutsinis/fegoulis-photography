import React from "react"

import MenuLinks from "./MenuLinks"
import SocialIcons from "../SocialIcons"

import {
  DesktopMenuWrapper,
  DesktopMenuPlaceholder,
} from "../../styledElements/Menu"

const DesktopMenu = () => (
  <DesktopMenuWrapper>
    <MenuLinks />
    <DesktopMenuPlaceholder />
    <SocialIcons />
  </DesktopMenuWrapper>
)

export default DesktopMenu
