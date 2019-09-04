import React from "react"

import {
  StyledSocialBox,
  StyledAnchorLink,
  StyledInstagram,
  StyledFacebook,
} from "../styledElements/SocialIcons"

const SocialIcons = ({ collapsedMT }) => (
  <StyledSocialBox collapsedMT={collapsedMT}>
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
  </StyledSocialBox>
)

export default SocialIcons
