import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import CollectionList from "./CollectionsList"

const RenderCollections = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCollection {
        edges {
          node {
            title
            slug
            thumbnail {
              fluid(maxWidth: 800, quality: 20) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return <CollectionList data={data} />
}

export default RenderCollections
