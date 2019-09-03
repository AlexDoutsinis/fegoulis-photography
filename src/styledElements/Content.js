import styled from "styled-components"
import media from "styled-media-query"

export const StyledContent = styled.section`
  margin-left: 20vw;

  ${media.lessThan("medium")`
  width: 100vw;
  margin: 0;
  padding-top: 8vh;
`}
`
