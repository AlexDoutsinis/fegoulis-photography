import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

const Collection = ({ node }) => (
  <Link to={`/collection/${node.slug}`}>
    <Img fluid={node.gallery[0].fluid} />
  </Link>
)

export default Collection
