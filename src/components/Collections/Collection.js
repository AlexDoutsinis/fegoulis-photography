import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledImg = styled(Img)`
  /* height: 46vh; */

  max-width: 100%;
  height: auto;
`

const Collection = ({ node }) => (
  <Link to={`/collection/${node.slug}`}>
    <StyledImg fluid={node.gallery[0].fluid} />
  </Link>
)

export default Collection
