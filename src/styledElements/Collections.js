import styled from "styled-components"
import Img from "gatsby-image"
// import media from "styled-media-query"

// Collections grid
export const StyledGrid = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

// Collection template gallery
export const StyledInfoBox = styled.div`
  height: 20vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledTitle = styled.h2`
  font-size: 1.4rem;
  color: #fff;
`

export const StyledParagraph = styled.p`
  font-size: 0.9rem;
  color: #fff;
  margin-top: 1.5rem;
  color: #999;
  font-family: "Pathway Gothic One", sans-serif;
  text-transform: capitalize;
  font-weight: 400;
`

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
`

// Collection gallery grid
export const StyledImgWrapper = styled.div`
  margin: 0 1.2rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }

  cursor: zoom-in;
`

export const StyledImg = styled(Img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`
