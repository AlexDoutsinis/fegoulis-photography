import React from "react"

import {
  StyledCollapsedMenu,
  StyledPlaceholder,
  StyledX,
} from "../../styledElements/Menu"

import SocialIcons from "../SocialIcons"
import MenuLinks from "../Menu/MenuLinks"

const CollapsedMenu = ({ show, close }) => {
  return (
    <StyledCollapsedMenu show={show}>
      <StyledPlaceholder />
      <StyledX onClick={close} />
      <MenuLinks />
      <SocialIcons collapsedMT="setMT" />
    </StyledCollapsedMenu>
  )
}

export default CollapsedMenu
