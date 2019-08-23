import React from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"
import styled from "styled-components"

const ImageWrapper = styled.div`
  height: 50%;
  width: auto;
`

const Collection = ({ node }) => (
  <Link to={`/collections/${node.slug}`}>
    {node.gallery.map(image => (
      <ImageWrapper>
        <Img fluid={image.fluid} />
      </ImageWrapper>
    ))}
  </Link>
)

export default Collection
