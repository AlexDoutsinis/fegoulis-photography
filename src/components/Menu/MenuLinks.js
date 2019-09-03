import React from "react"

import StyledLi from "../../styledElements/Menu"

const MenuLinks = () => (
  <ul>
    <StyledLi>
      <Link to="/">Work</Link>
    </StyledLi>
    <StyledLi>
      <Link to="/">About</Link>
    </StyledLi>
    <StyledLi>
      <Link to="/">Contact</Link>
    </StyledLi>
  </ul>
)

export default MenuLinks
