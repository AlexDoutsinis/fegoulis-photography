import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import media from "styled-media-query"

// Collections grid
export const StyledGrid = styled.div`
  display: grid;
  z-index: 1;

  ${media.greaterThan("769px")`
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-auto-flow: dense;
    grid-gap: 1.5rem;
  `}

  ${media.greaterThan("huge")`
    grid-template-columns: 1.33fr 1.4fr 1.33fr;
    grid-gap: 1.2rem;
  `}

  ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;
  `}
`

export const StyledLinkThumb = styled(Link)`
  overflow: hidden;
  position: relative;
`

export const StyledThumbBackdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(36, 36, 36, 0.7);
  transition: opacity 0.5s ease;
`

export const StyledImgThumbWrapper = styled.div`
  span {
    color: #fff;
    font-size: 1.2rem;
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 5%);
    transition: transform 0.3s, visibility 0.2s;
    transition-timing-function: ease;
    z-index: 2;
    visibility: hidden;
  }

  &:hover {
    transform: scale(1.05);

    ${StyledThumbBackdrop} {
      opacity: 1;
      z-index: 1;
    }

    span {
      visibility: visible;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      color: #fff;
    }
  }

  transition: transform 0.3s ease;
`

// Collection template gallery
export const StyledInfoBox = styled.div`
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${media.greaterThan("medium")`
    margin-bottom: 1.5rem;
  `}

  ${media.greaterThan("huge")`
    margin-bottom: 3.5rem;
  `}

  ${media.lessThan("small")`
    min-height: 20vh;
      margin-bottom: 1rem;
  `}
`

export const StyledTitle = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.5rem;

  ${media.greaterThan("medium")`
    font-size: 2.8rem;
    margin-top: 2rem;
    margin-bottom: 2.5rem;
  `}

  ${media.greaterThan("large")`
    margin-top: 3.5rem;
  `}

  ${media.greaterThan("huge")`
    margin-top: 5rem;
    margin-bottom: 3rem;
  `}
`

export const StyledParagraph = styled.p`
  font-size: 1rem;
  color: #999;
  font-family: "Pathway Gothic One", sans-serif;
  text-transform: capitalize;
  font-weight: 400;

  ${media.lessThan("medium")`
    padding: 0 2.5rem;
  `}

  ${media.lessThan("small")`
    font-size: .9rem;
    letter-spacing: 0.8px;
  `}
`

export const StyledGallery = styled.div`
  display: grid;

  ${media.greaterThan("small")`
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
    align-items: center;
    grid-gap: 1.5rem;
    margin: 0 2rem;
  `}

  ${media.greaterThan("769px")`
    margin-left: 0;
    margin-right: 3rem;

    grid-gap: 2rem;
  `}

  ${media.greaterThan("huge")`
    margin-right: 4rem;
    grid-gap: 2.5rem;
  `}

  ${media.lessThan("small")`
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem;
  `}
`

export const StyledImgWrapper = styled.div`
  cursor: zoom-in;

  &:not(:first-child) {
    margin-top: 2rem;
  }
`

export const StyledImg = styled(Img)`
  border-radius: 8px;
`
