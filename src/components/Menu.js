import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import CollapsedMenu from "./CollapsedMenu"

import styled from "styled-components"
import media from "styled-media-query"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Bars = styled.i`
  color: #fff;
  font-size: 1.2rem;
`

const MenuBox = styled.div`
  position: fixed;
  top: 0;
  width: 13vw;
  height: 100vh;
  background-color: green;

  ${media.lessThan("small")`
    /* screen width is less than 768px (medium) */
    background-color: #000;
    height: 8vh;
    width: 100vw;
  `}
`

const HeaderBox = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 5%;
`

const H1 = styled.h1`
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.7px;
  padding-left: 4%;
  width: 100%;
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

  return (
    <MenuBox>
      <HeaderBox>
        <Bars>
          <FontAwesomeIcon icon={faBars} />
        </Bars>
        <Link to="/">
          <H1>{data.site.siteMetadata.title}</H1>{" "}
        </Link>
      </HeaderBox>
      <CollapsedMenu />
    </MenuBox>
  )
}

export default Menu
