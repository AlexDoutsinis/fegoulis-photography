import styled from "styled-components"
import media from "styled-media-query"

export const StyledContent = styled.section`
  margin-top: ${props => (props.mt ? props.mt : "4rem")};
  margin-right: 4rem;

  ${media.greaterThan("1024px")`
    margin-left: 23vw;
  `}

  ${media.greaterThan("huge")`
    margin-left: 20vw;
  `}

  ${media.between("medium", "1023px")`
    margin-left: 30vw;
  `}

  ${media.lessThan("medium")`
    margin: 0;
    padding-top: 8vh;
  `}
`
