import styled from 'styled-components'
import { transparentize } from 'polished'
import { string, number, shape } from 'prop-types'

const Color = styled.div`
  background-color: ${props => transparentize(1 - props.color.opacity, props.color.hex)};
  height: ${props => props.height};
  left: -100%;
  position: absolute;
  top: ${props => props.position.top};
  transform: rotateZ(${props => `${props.rotate}deg`});
  width: ${props => props.width};
`

Color.propTypes = {
  color: shape({
    hex: string.isRequired,
    opacity: number.isRequired
  }).isRequired,
  height: string.isRequired,
  position: shape({
    top: string.isRequired
  }).isRequired,
  rotate: number,
  width: string.isRequired,
}

Color.defaultProps = {
  rotate: 0
}

export default Color
