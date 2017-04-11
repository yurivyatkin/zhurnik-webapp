import React, { Component } from 'react'
import Dashboard from './Dashboard'
import TextPane from './TextPane'
import './App.css'

class App extends Component {
  render () {
    return (
      <div>
        <Dashboard />
        <TextPane />
      </div>
    )
  }
}

export default App
