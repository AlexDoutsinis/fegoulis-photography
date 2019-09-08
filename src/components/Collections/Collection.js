import React from "react"

import { StyledLinkThumb } from "../../styledElements/Collections"

import Thumbnail from "./Thumbnail"

const Collection = ({ node }) => (
  <StyledLinkThumb to={`/collection/${node.slug}`}>
    <Thumbnail title={node.title} fluid={node.thumbnail.fluid} />
  </StyledLinkThumb>
)

export default Collection
