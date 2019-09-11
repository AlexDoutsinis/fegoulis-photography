import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import { StyledContent } from "../../styledElements/Content"

const Layout = props => {
  return (
    <>
      <Header />
      <StyledContent mt={props.mt}>{props.children}</StyledContent>
      <Footer />
    </>
  )
}

export default Layout
