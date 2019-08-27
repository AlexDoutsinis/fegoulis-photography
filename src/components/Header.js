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

import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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
          <StyledBars icon={faBars} onClick={collapsedMenuClickHandler} />
          <StyledH1LinkWrapper to="/">
            <StyledH1>{data.site.siteMetadata.title}</StyledH1>
          </StyledH1LinkWrapper>
        </StyledNavBar>
      </StyledHeader>
      <CollapsedMenu show={open} close={collapsedMenuClickHandler} />
      {backdrop}
    </>
  )
}

export default Header
