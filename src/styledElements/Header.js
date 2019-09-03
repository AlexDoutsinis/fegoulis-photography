import styled from "styled-components"
import media from "styled-media-query"

import { FaBars } from "react-icons/fa"

import { Link } from "gatsby"

export const StyledHeader = styled.header`
  height: 8vh;
  width: 100vw;
  background-color: #000;
  padding: 0 1.2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  //! test
`

export const StyledNavBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledBars = styled(FaBars)`
  display: inline-block;
  color: #fff;
  
  /* ${media.lessThan("medium")`
      font-size: 1.4rem;
  `}

  ${media.lessThan("small")`
      font-size: 1.2rem;
  `} */

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`

export const StyledH1LinkWrapper = styled(Link)`
  margin-left: 0.9rem;
  margin-top: 0.15rem;
`

export const StyledH1 = styled.h1`
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1.7px;

  /* ${media.lessThan("medium")`
      font-size: 1.2rem;
  `}

  ${media.lessThan("small")`
    font-size: 1rem;
  `} */

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`
