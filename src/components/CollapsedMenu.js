import React from "react"
import { Link } from "gatsby"

import styled, { css } from "styled-components"
import media from "styled-media-query"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

const Menu = styled.div`
  box-sizing: border-box;
  height: 100vh;
  width: 80vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #000;
  padding: 0 10% 0 5%;
  z-index: 2;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  ${props =>
    props.show &&
    css`
      transform: translateX(0);
    `};
`

const SocialBox = styled.div`
  display: inline-block;
  color: #555555;
  margin-top: 13%;
  font-size: 1.1rem;
`

const Icon = styled.div`
  display: inline-block;
  padding-right: 1.1rem;

  &:hover {
    color: #fff;
  }
`

const Li = styled.li`
  a {
    color: white;
    letter-spacing: 1.2px;
    font-family: "Pathway Gothic One", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
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

const X = styled.div`
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 8vh;
`

const CollapsedMenu = ({ close, show }) => {
  return (
    <Menu show={show}>
      <X onClick={close}>
        <FontAwesomeIcon icon={faTimes} />
      </X>
      <ul>
        <Li>
          <Link to="/">Work</Link>
        </Li>
        <Li>
          <Link to="/">About</Link>
        </Li>
        <Li>
          <Link to="/">Contact</Link>
        </Li>
      </ul>
      <SocialBox>
        <Icon>
          <FontAwesomeIcon icon={faInstagram} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faFacebookF} />
        </Icon>
      </SocialBox>
    </Menu>
  )
}

export default CollapsedMenu
