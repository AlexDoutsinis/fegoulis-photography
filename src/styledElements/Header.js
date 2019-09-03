import styled from "styled-components"
import media from "styled-media-query"

import { IoMdMenu } from "react-icons/io"

import { Link } from "gatsby"

export const StyledHeader = styled.header`
  height: 100vh;
  width: 20vw;

  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  ${media.lessThan("medium")`
    height: 8vh;
    width: 100vw;
    padding: 0 1.2rem;
  `}
`

export const StyledNavBar = styled.div`
  position: relative;

  ${media.lessThan("medium")`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
  ${media.greaterThan("medium")`
    display: inline-block;
  `}

  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.7px;

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`
