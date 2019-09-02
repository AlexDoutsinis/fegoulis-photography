import styled from "styled-components"
// import media from "styled-media-query"

import { StyledSocialBox } from "./SocialIcons"

export const StyledFooter = styled.footer`
  height: 15vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledFooterSocialBox = styled(StyledSocialBox)`
  margin: 0;
`

export const Info = styled.div`
  margin-top: 1.2rem;

  p {
    display: inline-block;
    font-size: 0.9rem;
    color: #555555;

    a {
      color: #fff;
    }
  }
`
