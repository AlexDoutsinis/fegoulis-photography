import React from "react"

import RenderCollections from "./RenderCollections"
import { StyledGrid } from "../../styledElements/Collections"

const Collections = () => {
  return (
    <StyledGrid>
      <RenderCollections />
    </StyledGrid>
  )
}

export default Collections
