import styled from "styled-components"
import media from "styled-media-query"

import { FaInstagram, FaFacebookF } from "react-icons/fa"

export const StyledSocialBox = styled.div`
  width: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => props.collapsedMT === "setMT" && "2rem"};
  margin-left: 0.5rem;

  ${media.greaterThan("medium")`
    margin-top: 1rem;
    margin-left: 0;
  `}
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

  ${media.greaterThan("medium")`
    margin: 0;
  `}
`

export const StyledFacebook = styled(FaFacebookF)`
  display: inline-block;
  margin-right: 1.1rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }

  ${media.greaterThan("medium")`
    margin: 0;
  
  `}
`
