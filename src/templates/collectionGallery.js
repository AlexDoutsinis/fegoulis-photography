import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import GalleryGrid from "../components/Collections/GalleryGrid"

import {
  StyledInfoBox,
  StyledTitle,
  StyledParagraph,
  StyledGallery,
} from "../styledElements/Collections"

export const query = graphql`
  query($slug: String!) {
    contentfulCollection(slug: { eq: $slug }) {
      title
      description
      gallery {
        fluid(maxWidth: 1800, quality: 65) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const CollectionGallery = ({ data: { contentfulCollection } }) => {
  return (
    <Layout mt={"0"}>
      <StyledInfoBox>
        <StyledTitle>{contentfulCollection.title}</StyledTitle>
        <StyledParagraph>{contentfulCollection.description}</StyledParagraph>
      </StyledInfoBox>

      <StyledGallery>
        <GalleryGrid data={contentfulCollection} />
      </StyledGallery>
    </Layout>
  )
}

export default CollectionGallery
