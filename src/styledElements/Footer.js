import styled from "styled-components"
import media from "styled-media-query"

export const StyledFooter = styled.footer`
  height: 15vh;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("medium")`
    height: 12vh;
  `}

  ${media.greaterThan("huge")`
    height: 18vh
  `}
`

export const Info = styled.div`
    ${media.greaterThan("medium")`
      margin-top: 1.5rem;
    `}
  
    ${media.greaterThan("large")`
      
    `}
  
    ${media.lessThan("medium")`
      margin-top: 1.2rem;
    `}

  p {
    display: inline-block;
    font-size: 0.9rem;
    color: #555555;

    ${media.lessThan("large")`
      font-size: .9rem;
    `}

    a {
      color: #fff;
    }
  }
`
