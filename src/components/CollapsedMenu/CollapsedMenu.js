import React from "react"
import { Link } from "gatsby"

import {
  StyledMenu,
  StyledPlaceholder,
  StyledX,
  StyledLi,
  StyledSocialBox,
  StyledInstagram,
  StyledFacebook,
} from "../../styledElements/CollapsedMenu"

const CollapsedMenu = ({ show, close }) => {
  return (
    <StyledMenu show={show}>
      <StyledPlaceholder />
      <StyledX onClick={close} />

      <ul>
        <StyledLi>
          <Link to="/">Work</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/">About</Link>
        </StyledLi>
        <StyledLi>
          <Link to="/">Contact</Link>
        </StyledLi>
      </ul>

      <StyledSocialBox>
        <StyledInstagram />
        <StyledFacebook />
      </StyledSocialBox>
    </StyledMenu>
  )
}

export default CollapsedMenu
