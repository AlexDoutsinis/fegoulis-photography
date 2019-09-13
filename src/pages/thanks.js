import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Layout from "../components/Layout/Layout"

const Wrapper = styled.div`
  width: 60vw;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.lessThan("medium")`
    width: 100vw;
  `}
`

const H2 = styled.h2`
  font-size: 1.2rem;

  ${media.lessThan("small")`
    width: 80vw;
    font-size: 1rem;
  `}
`

const Thanks = () => (
  <Layout>
    <Wrapper>
      <H2>Thanks for your message, I will be in contact soon.</H2>
    </Wrapper>
  </Layout>
)

export default Thanks
