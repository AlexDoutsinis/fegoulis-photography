import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import { StyledContent } from "../../styledElements/Content"

const Layout = props => {
  return (
    <div>
      <Header />
      <StyledContent>{props.children}</StyledContent>
      <Footer />
    </div>
  )
}

export default Layout
