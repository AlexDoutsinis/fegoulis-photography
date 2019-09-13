import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/Layout"
import GalleryGrid from "../components/Collections/GalleryGrid"
import SEO from "../components/SEO"

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
      thumbnail {
        fluid(maxWidth: 1000, quality: 65) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
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
      <SEO
        title={contentfulCollection.title}
        description={contentfulCollection.description}
        image={contentfulCollection.thumbnail.fluid.src}
        keywords={contentfulCollection.title}
      />
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
