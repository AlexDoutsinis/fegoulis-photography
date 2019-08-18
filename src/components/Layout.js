import React from "react"
import { Reset } from "styled-reset"
import Menu from "./Menu"

const Layout = props => {
  return (
    <div>
      <Reset />
      <Menu />
      {props.children}
    </div>
  )
}

export default Layout
