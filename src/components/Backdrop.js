import React from "react"

import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const Backdrop = props => <Wrapper className="backdrop" onClick={props.close} />

export default Backdrop
