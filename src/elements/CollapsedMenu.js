import styled, { css } from "styled-components"
// import media from "styled-media-query"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const StyledMenu = styled.div`
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

export const StyledX = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 8vh;
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
  }

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #333333;
  }
`

export const StyledSocialBox = styled.div`
  display: inline-block;
  color: #555555;
  margin-top: 2.3rem;
  font-size: 1.1rem;
  margin-left: 0.2rem;
`

export const StyledSocialIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  margin-right: 1.1rem;

  &:hover {
    color: #fff;
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
