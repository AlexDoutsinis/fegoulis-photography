import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import {
  StyledInfoBox,
  StyledTitle,
  StyledParagraph,
  StyledGallery,
  StyledImg,
} from "../styledElements/Collections"

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
    <StyledInfoBox>
      <StyledTitle>{contentfulCollections.title}</StyledTitle>
      <StyledParagraph>{contentfulCollections.description}</StyledParagraph>
    </StyledInfoBox>

    <StyledGallery>
      {contentfulCollections.gallery.map(image => (
        <StyledImg fluid={image.fluid} />
      ))}
    </StyledGallery>
  </Layout>
)

export default Collection
