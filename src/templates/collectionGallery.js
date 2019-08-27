import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import GalleryGrid from "../components/Collections/GalleryGrid"

import {
  StyledInfoBox,
  StyledTitle,
  StyledParagraph,
  StyledGallery,
} from "../styledElements/Collections"

export const query = graphql`
  query($slug: String!) {
    contentfulCollections(slug: { eq: $slug }) {
      title
      description
      gallery {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const CollectionGallery = ({ data: { contentfulCollections } }) => {
  return (
    <Layout>
      <StyledInfoBox>
        <StyledTitle>{contentfulCollections.title}</StyledTitle>
        <StyledParagraph>{contentfulCollections.description}</StyledParagraph>
      </StyledInfoBox>

      <StyledGallery>
        <GalleryGrid data={contentfulCollections} />
      </StyledGallery>
    </Layout>
  )
}

export default CollectionGallery
