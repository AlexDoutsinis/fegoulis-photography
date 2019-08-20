import React from "react"

import styled from "styled-components"
import { Reset } from "styled-reset"
import { createGlobalStyle } from "styled-components"
import Menu from "./Menu"
import media from "styled-media-query"

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Cardo:700&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Pathway+Gothic+One&display=swap');

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
  background-color: yellow;

  ${media.lessThan("small")`
    background-color: red;
    width: 100vw;
    margin: 0;
    height: 92vh;
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
