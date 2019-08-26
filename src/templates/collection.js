import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/Layout"

const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled(Img)`
  /* height: 50vh;
  background-position: center; */

  max-width: 100%;
  height: auto;
  margin: 0 1.2rem;
  &:not(:first-child) {
    margin-top: 2rem;
  }
`

const StyledTitleBox = styled.div`
  height: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.h2`
  font-size: 1.4rem;
  color: #fff;
`

export const query = graphql`
  query($slug: String!) {
    contentfulCollections(slug: { eq: $slug }) {
      title
      description
      gallery {
        fluid {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
    }
  }
`

const Collection = ({ data: { contentfulCollections } }) => (
  <Layout>
    <StyledTitleBox>
      <StyledTitle>{contentfulCollections.title}</StyledTitle>
    </StyledTitleBox>

    <StyledGallery>
      {contentfulCollections.gallery.map(image => (
        <StyledImg fluid={image.fluid} />
      ))}
    </StyledGallery>
  </Layout>
)

export default Collection
