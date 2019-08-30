import React from "react"
import Collection from "./Collection"

const CollectionsList = ({ data: { allContentfulCollection } }) =>
  allContentfulCollection.edges.map(({ node }) => (
    <Collection node={node} key={node.slug} />
  ))

export default CollectionsList
