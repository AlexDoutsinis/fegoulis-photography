import styled, { css } from "styled-components"
import media from "styled-media-query"

import { IoMdClose } from "react-icons/io"

export const StyledCollapsedMenu = styled.div`
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  padding-left: 1.2rem;
  z-index: 2;

  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  ${props =>
    props.show &&
    css`
      transform: translateX(0);
    `};
`

export const StyledPlaceholder = styled.div`
  height: 3vh;
`

export const StyledX = styled(IoMdClose)`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 0 0 0.7rem 0.3rem;

  ${media.lessThan("large")`
    font-size: 1.5rem;
  `}
`

export const StyledLi = styled.li`
  a {
    color: white;
    letter-spacing: 1.2px;
    font-family: "Pathway Gothic One", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    text-transform: uppercase;
    display: inline-block;
    padding: 0.8rem 0 0 0.5rem;

    ${media.greaterThan("large")`
    font-size: 1.1rem;
    `}

    ${media.greaterThan("medium")`
      padding: 0;
      margin-bottom: 1.2rem;
    `}

    &:hover {
      color: #7f7f7f;
    }
  }

  &:before {
    ${media.lessThan("medium")`
      content: "";
      display: block;
      width: 95%;
      border-bottom: 1px solid #333333;
      margin: 1rem 0 0.3rem 0;
    `}
  }
`

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

export const DesktopMenuWrapper = styled.div`
  display: block;

  ${media.lessThan("medium")`
    display: none;
  `}
`
