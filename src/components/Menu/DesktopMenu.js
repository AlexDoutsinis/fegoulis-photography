import React from "react"

import MenuLinks from "./MenuLinks"
import SocialIcons from "../SocialIcons"

import { DesktopMenuWrapper } from "../../styledElements/Menu"

const DesktopMenu = () => (
  <DesktopMenuWrapper>
    <MenuLinks />
    <SocialIcons />
  </DesktopMenuWrapper>
)

export default DesktopMenu
