import React from "react"
import Img from "gatsby-image"

import { Link } from "gatsby"
import styled from "styled-components"

const ImageWrapper = styled.div`
  /* height: 20%;
  width: auto;
  margin-bottom: 10px; */

  /* border: solid red 4px; */
  /* margin-bottom: 10px; */
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
