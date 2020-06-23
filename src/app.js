import React from 'react'
import app from './dva'

const App = app.start(
  ({ children }) => children
)

export default App;
