import React from "react"

import styled from "styled-components"
import { Reset } from "styled-reset"
import { createGlobalStyle } from "styled-components"
import Menu from "./Menu"
import media from "styled-media-query"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Cardo:700|Pathway+Gothic+One&display=swap');

    font-size: 16px;
    line-height: 16px;
    font-family: 'Cardo', serif;
    font-weight: 700;
    color: #fff;

    a {
      text-decoration: none;
    }
  }
`

const Content = styled.div`
  margin-left: 13vw;
  height: 100vh;

  ${media.lessThan("small")`
    width: 100vw;
    height: auto;
    margin: 0;
    padding-top: 8vh;
  `}
`

const Layout = props => {
  return (
    <div>
      <Reset />
      <GlobalStyle />
      <Menu />
      <Content>{props.children}</Content>
    </div>
  )
}

export default Layout
