import React, { Component } from 'react'

import iceCream from './ice-cream.svg'
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <img src={iceCream} className="logo" aria-label="ice-cream" />

        <p>This starter tastes awesome!</p>
      </div>
    )
  }
}

export default App
