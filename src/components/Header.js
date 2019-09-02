import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import CollapsedMenu from "./CollapsedMenu/CollapsedMenu"
import Backdrop from "./CollapsedMenu/Backdrop"

import {
  StyledHeader,
  StyledNavBar,
  StyledBars,
  StyledH1LinkWrapper,
  StyledH1,
} from "../styledElements/Header"

const Header = () => {
  const [open, setOpen] = useState(false)

  const collapsedMenuClickHandler = () => setOpen(open => !open)

  let backdrop

  if (open) {
    backdrop = <Backdrop close={collapsedMenuClickHandler} />
  }

  return (
    <>
      <StyledHeader>
        <StyledNavBar>
          <StyledBars onClick={collapsedMenuClickHandler} />
          <StyledH1LinkWrapper to="/">
            <StyledH1>Fegoulis</StyledH1>
          </StyledH1LinkWrapper>
        </StyledNavBar>
      </StyledHeader>
      <CollapsedMenu show={open} close={collapsedMenuClickHandler} />
      {backdrop}
    </>
  )
}

export default Header
