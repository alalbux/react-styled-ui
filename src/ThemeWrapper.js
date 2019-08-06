import React from 'react'
import { ThemeProvider } from 'styled-components'

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={() => {}}>
    {children}
  </ThemeProvider>
)

export default ThemeWrapper
