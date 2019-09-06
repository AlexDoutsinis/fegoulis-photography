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
              fluid(maxWidth: 1000, quality: 75) {
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
