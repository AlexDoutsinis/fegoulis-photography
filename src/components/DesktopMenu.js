import React from "react"

import { Link } from "gatsby"

import {
  DesktopMenuWrapper,
  StyledDesktopMenuLi,
} from "../styledElements/Header"

const DesktopMenu = () => (
  <DesktopMenuWrapper>
    <ul>
      <StyledDesktopMenuLi>
        <Link to="/">Work</Link>
      </StyledDesktopMenuLi>

      <StyledDesktopMenuLi>
        <Link to="/">About</Link>
      </StyledDesktopMenuLi>

      <StyledDesktopMenuLi>
        <Link to="/">Contact</Link>
      </StyledDesktopMenuLi>
    </ul>
  </DesktopMenuWrapper>
)

export default DesktopMenu
