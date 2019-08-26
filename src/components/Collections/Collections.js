import React from "react"
import styled from "styled-components"

import RenderCollections from "./RenderCollections"

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const Collections = () => {
  return (
    <Grid>
      <RenderCollections />
    </Grid>
  )
}

export default Collections
