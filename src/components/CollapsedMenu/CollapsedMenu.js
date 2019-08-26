import React from "react"
import { Link } from "gatsby"

import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

import {
  StyledMenu,
  StyledX,
  StyledLi,
  StyledSocialBox,
  StyledSocialIcon,
} from "../../elements/CollapsedMenu"

const CollapsedMenu = ({ show, close }) => {
  return (
    <StyledMenu show={show}>
      <StyledX icon={faTimes} onClick={close} />
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
        <StyledSocialIcon icon={faInstagram} />
        <StyledSocialIcon icon={faFacebookF} />
      </StyledSocialBox>
    </StyledMenu>
  )
}

export default CollapsedMenu
