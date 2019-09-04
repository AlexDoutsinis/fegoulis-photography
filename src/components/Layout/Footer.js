import React from "react"

import { StyledFooter, Info } from "../../styledElements/Footer"

import SocialIcons from "../SocialIcons"

const Footer = () => (
  <StyledFooter>
    <SocialIcons />
    <Info>
      <p>
        &copy; 2019 &#124; Made by{" "}
        <a href="https://github.com/Alexiosdut" target="__blank">
          Alexis Doutsinis
        </a>
      </p>
    </Info>
  </StyledFooter>
)

export default Footer
