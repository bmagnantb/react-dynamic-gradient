import React from 'react'
import { string, number, arrayOf, object } from 'prop-types'
import styled from 'styled-components'
import { flatten } from 'ramda'

import BlurContainer from './BlurContainer'
import Color from './Color'
import Mask from './Mask'

const weightColors = colors => flatten(
  colors.map(color => {
    let colorCopies = []

    for (var i = 0; i < color.weight; i++) {
      colorCopies.push(color)
    }

    return colorCopies
  })
)

const randomFavorSmall = () => Math.random() * Math.random()
const randomInRange = (min, max) => randomFavorSmall() * (max - min) + min

const randomDimension = (min, max, unit) => randomInRange(min, max) + unit
const randomRotate = () => Math.random() * 360
const randomPosition = index => ({ top: index * 30 - 100 + 'vh' })
const randomColor = (colors, num = Math.random()) =>
  colors.find((color, index) => num <= (index + 1) / colors.length)
const arrayOfNums = num => {
  let array = []

  for (var i = 1; i < num; i++) {
    array.push(i)
  }

  return array
}

const BackgroundContainer = styled.div`
  height: 200%;
  left: -50%;
  overflow: hidden;
  position: absolute;
  top: -50%;
  width: 200%;
  z-index: -1;
`

const Background = ({
  colors,
  heightUnit,
  widthUnit,
  maxHeight,
  minHeight,
  maxWidth,
  minWidth
}) => (
  <BackgroundContainer>
    <BlurContainer>
      {
        arrayOfNums(50).map((num, index) => (
          <Color
            key={`colorblock-${index}`}
            color={randomColor(weightColors(colors))}
            width={randomDimension(minWidth, maxWidth, widthUnit)}
            height={randomDimension(minHeight, maxHeight, heightUnit)}
            rotate={randomRotate()}
            position={randomPosition(index)}
          />
        ))
      }
    </BlurContainer>
    <Mask />
  </BackgroundContainer>
)

Background.propTypes = {
  colors: arrayOf(object).isRequired,
  heightUnit: string.isRequired,
  widthUnit: string.isRequired,
  maxHeight: number.isRequired,
  minHeight: number.isRequired,
  maxWidth: number.isRequired,
  minWidth: number.isRequired
}

Background.defaultProps = {
  heightUnit: 'vh',
  widthUnit: 'vw',
  maxHeight: 400,
  minHeight: 25,
  maxWidth: 600,
  minWidth: 35
}

export default Background
export { BlurContainer }
export { Color }
export { Mask }
