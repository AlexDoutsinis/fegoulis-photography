import React from "react"
import Img from "gatsby-image"

import {
  StyledImgThumbWrapper,
  StyledThumbBackdrop,
} from "../../styledElements/Collections"

const Thumbnail = ({ title, fluid }) => (
  <StyledImgThumbWrapper>
    <StyledThumbBackdrop />
    <span>{title}</span>
    <Img fluid={fluid} alt={fluid.title} />
  </StyledImgThumbWrapper>
)

export default Thumbnail
