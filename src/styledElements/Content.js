import styled from "styled-components"
import media from "styled-media-query"

export const StyledContent = styled.section`
  margin-left: 13vw;

  ${media.lessThan("small")`
  width: 100vw;
  margin: 0;
  padding-top: 8vh;
`}
`
