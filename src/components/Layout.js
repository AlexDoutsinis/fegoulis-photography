import React from "react"
import { Reset } from "styled-reset"
import Menu from "./Menu"
import styled from "styled-components"

const Content = styled.div`
  margin-left: 13%;
  height: 100vh;
`

const Layout = props => {
  return (
    <div>
      <Reset />
      <Menu />
      <Content>{props.children}</Content>
    </div>
  )
}

export default Layout
