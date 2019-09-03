import styled from "styled-components"
import Img from "gatsby-image"
import media from "styled-media-query"

// Collections grid
export const StyledGrid = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* flex-direction: row;
  flex-wrap: wrap; */

  display: grid;
  grid-template-columns: 1fr 1fr;

  z-index: 1;
  width: 100%;

  ${media.lessThan("medium")`
      display: flex;
      flex-direction: column;

      //! test
  `}
`

// Collection template gallery
export const StyledInfoBox = styled.div`
  height: 18vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const StyledTitle = styled.h2`
  font-size: 1.45rem;
  color: #fff;

  ${media.lessThan("medium")`
    font-size: 2.8rem;
  `}

  ${media.lessThan("small")`
    font-size: 1.45rem;
  `}

  /* ${media.lessThan("large")`
    font-size: 2rem;
  `} */

  position: absolute;

  top: 32%;

`

export const StyledParagraph = styled.p`
  font-size: 0.95rem;
  color: #fff;
  position: absolute;
  bottom: 28%;
  color: #999;
  font-family: "Pathway Gothic One", sans-serif;
  text-transform: capitalize;
  font-weight: 400;
  
  ${media.lessThan("medium")`
    font-size: 1rem;
  `}

  ${media.lessThan("small")`
    font-size: .9rem;
  `}
  /* ${media.lessThan("large")`
    font-size: .9rem;
  `} */

`

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  /* ${media.lessThan("small")`
      width: 100%;
  `} */

  ${media.lessThan("large")`
      width: 100%;
  `}
`

export const StyledImgWrapper = styled.div`
  margin: 0 1.5rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }

  cursor: zoom-in;
`

export const StyledImg = styled(Img)`
  border-radius: 8px;
`
