import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const MenuBox = styled.div`
  position: fixed;
  width: 13%;
  height: 100vh;
  background-color: red;
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
      <Link to="/">
        <h1>{data.site.siteMetadata.title}</h1>{" "}
      </Link>
    </MenuBox>
  )
}

export default Menu
