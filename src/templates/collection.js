import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

export const query = graphql`
  query($slug: String!) {
    contentfulCollections(slug: { eq: $slug }) {
      title
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

const Collection = ({ data }) => (
  <>
    <Layout>
      <h2>{data.contentfulCollections.title}</h2>
    </Layout>
  </>
)

export default Collection
