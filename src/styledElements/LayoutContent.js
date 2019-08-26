import styled from "styled-components"
import media from "styled-media-query"

export const StyledContent = styled.div`
  margin-left: 13vw;
  height: 100vh;

  ${media.lessThan("small")`
  width: 100vw;
  height: auto;
  margin: 0;
  padding-top: 8vh;
`}
`
