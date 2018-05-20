import React from 'react'
import styled from 'styled-components'
import 'reboot.css'

import Background from './lib'

const backgroundColors = [
  { hex: '#54A38D', opacity: 0.45, weight: 3 },

  { hex: '#4EDAE7', opacity: 0.5, weight: 3 },

  { hex: '#D24982', opacity: 0.5, weight: 3 },

  { hex: '#FFFF29', opacity: 0.5, weight: 1 }
]

const Container = styled.div`
  height: 500vh;
  position: relative;
  width: 100%;
`

const App = () => (
  <Container>
    <Background colors={backgroundColors} />
  </Container>
)

export default App
