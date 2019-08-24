import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import CollapsedMenu from "./CollapsedMenu"
import Backdrop from "./Backdrop"

import styled from "styled-components"
import media from "styled-media-query"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Bars = styled.i`
  /* display: none; */

  ${media.lessThan("small")`
  /* display: inline-block; */

  /* border: solid red 2px; */

  color: #fff;
  font-size: 1.2rem;
  `}
`

const NavBar = styled.div`
  height: 100%;
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: row;
  align-items: center;

  /* justify-content: center; */
`

const HeaderBox = styled.div`
  height: 8vh;
  width: 100vw;
  background-color: #000;

  padding: 0 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  /* border: solid red 2px; */
`

const H1 = styled.h1`
  display: inline-block;
  width: 100vw;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  padding-left: 4%;

  /* border: solid green 2px; */
`

const Menu = () => {
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
      <HeaderBox>
        <NavBar>
          <Bars onClick={collapsedMenuClickHandler}>
            <FontAwesomeIcon icon={faBars} />
          </Bars>
          <Link to="/">
            <H1>{data.site.siteMetadata.title}</H1>{" "}
          </Link>
        </NavBar>
      </HeaderBox>
      <CollapsedMenu show={open} close={collapsedMenuClickHandler} />
      {backdrop}
    </>
  )
}

export default Menu
