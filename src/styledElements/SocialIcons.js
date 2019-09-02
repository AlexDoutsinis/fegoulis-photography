import styled from "styled-components"
// import media from "styled-media-query"

import { FaInstagram, FaFacebookF } from "react-icons/fa"

export const StyledSocialBox = styled.div`
  display: inline-block;
  margin-top: 2.3rem;
  margin-left: 0.2rem;
`

export const StyledAnchorLink = styled.a`
  color: #555555;
  font-size: 1.2rem;
`

export const StyledInstagram = styled(FaInstagram)`
  display: inline-block;
  margin-right: 1.1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`

export const StyledFacebook = styled(FaFacebookF)`
  display: inline-block;
  margin-right: 1.1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`
