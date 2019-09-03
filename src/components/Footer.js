import React from "react"

import {
  StyledFooter,
  StyledFooterSocialBox,
  Info,
} from "../styledElements/Footer"

import {
  StyledAnchorLink,
  StyledInstagram,
  StyledFacebook,
} from "../styledElements/SocialIcons"

const Footer = () => (
  <StyledFooter>
    <StyledFooterSocialBox>
      <StyledAnchorLink
        href="https://www.instagram.com/kostasfeg21"
        target="__blank"
      >
        <StyledInstagram />
      </StyledAnchorLink>

      <StyledAnchorLink
        href="https://www.facebook.com/kfegoulis"
        target="__blank"
      >
        <StyledFacebook />
      </StyledAnchorLink>
    </StyledFooterSocialBox>

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
