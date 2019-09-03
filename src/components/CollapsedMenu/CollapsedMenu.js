import React from "react"
import { Link } from "gatsby"

import {
  StyledMenu,
  StyledPlaceholder,
  StyledX,
  StyledLi,
} from "../../styledElements/CollapsedMenu"

import {
  StyledSocialBox,
  StyledAnchorLink,
  StyledInstagram,
  StyledFacebook,
} from "../../styledElements/SocialIcons"

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
        <StyledAnchorLink
          href="https://www.instagram.com/kostasfeg21"
          target="__blank"
        >
          <StyledInstagram />
        </StyledAnchorLink>

        <StyledAnchorLink
          href="https://www.facebook.com/kfegoulis"
          target="__blank"
        >
          <StyledFacebook />
        </StyledAnchorLink>
      </StyledSocialBox>
    </StyledMenu>
  )
}

export default CollapsedMenu
