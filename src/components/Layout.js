import React from "react"

import Header from "./Header"

import { StyledContent } from "../styledElements/LayoutContent"

const Layout = props => {
  return (
    <div>
      <Header />
      <StyledContent>{props.children}</StyledContent>
    </div>
  )
}

export default Layout
