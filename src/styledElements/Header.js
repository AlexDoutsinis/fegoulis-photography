import styled from "styled-components"
import media from "styled-media-query"

import { IoMdMenu } from "react-icons/io"

import { Link } from "gatsby"

export const StyledHeader = styled.header`
  height: 100vh;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  ${media.greaterThan("1024px")`
    width: 23vw;
  `}

  ${media.greaterThan("huge")`
    width: 20vw;
  `}

  ${media.between("medium", "1023px")`
    width: 30vw;
  `}

  ${media.lessThan("medium")`
    height: 8vh;
    width: 100vw;
    padding: 0 1.2rem;
  `}
`

export const StyledNavBar = styled.div`
  display: flex;

  ${media.greaterThan("medium")`
    flex-direction: column;
    margin-left: 2rem;
  `}

  ${media.greaterThan("large")`
    flex-direction: column;
    margin-left: 3.2rem;
  `}

  ${media.lessThan("medium")`
    height: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 0;
    
  `}
`

export const StyledBars = styled(IoMdMenu)`
  display: none;
  color: #fff;

  ${media.lessThan("large")`
    font-size: 1.4rem;
  `}

  ${media.lessThan("medium")`
    display: inline-block;
  `}
`

export const StyledH1LinkWrapper = styled(Link)`
  ${media.lessThan("medium")`
    margin-left: 0.9rem;
    margin-top: 0.15rem;
  `}
`

export const StyledH1 = styled.h1`
  span {
    display: block;
    margin-top: 0.3rem;
  }

  ${media.greaterThan("medium")`
    margin-top: 5.3rem;
    margin-bottom: 2.1rem;
  `}

  ${media.greaterThan("large")`
    font-size: 1.2rem;
  `}

  ${media.greaterThan("huge")`
      margin-top: 6rem;
  `}

  ${media.lessThan("medium")`
      span {
        margin-top: 0;
        display: none;
      }

      margin: 0;
    `}

  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.7px;
`
