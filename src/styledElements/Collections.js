import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

// Collections grid
export const StyledGrid = styled.div`
  display: grid;
  margin-top: 4rem;
  margin-right: 4rem;
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
      margin: 0;
  `}
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
  `}

  ${media.greaterThan("huge")`
    margin-right: 4rem;
  `}

  ${media.lessThan("medium")`
    margin: 0 2rem;
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
