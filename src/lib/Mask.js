import styled from 'styled-components'
import { transparentize } from 'polished'

const Mask = styled.div`
  background-color: ${transparentize(.25, '#fff')};
  height: 200vh;
  left: -50vh;
  position: fixed;
  top: -50vw;
  width: 200vw;
  z-index: 1;
`

export default Mask
