import React from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"
import styled from "styled-components"

const StyledImg = styled(Img)`
  height: 46vh;
`

const Collection = ({ node }) => (
  <Link to={`/collection/${node.slug}`}>
    <StyledImg fluid={node.gallery[0].fluid} />
    {/* {node.gallery.map(image => (
      <StyledImg fluid={image.fluid} />
    ))} */}
  </Link>
)

export default Collection
