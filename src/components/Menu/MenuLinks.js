import React from "react"
import { Link } from "gatsby"

import { StyledLi } from "../../styledElements/Menu"

const color = {
  color: "#7F7F7F",
}

const MenuLinks = () => (
  <ul>
    <StyledLi>
      <Link activeStyle={color} to="/">
        Projects
      </Link>
    </StyledLi>
    <StyledLi>
      <Link activeStyle={color} to="/about">
        About
      </Link>
    </StyledLi>
    <StyledLi>
      <Link activeStyle={color} to="/contact">
        Contact
      </Link>
    </StyledLi>
  </ul>
)

export default MenuLinks
