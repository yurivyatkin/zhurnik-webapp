import React, { Component } from 'react'
import Dashboard from './Dashboard'
import TextPane from './TextPane'

class NotePage extends Component {
  render () {
    return (
      <div>
        <Dashboard />
        <TextPane />
      </div>
    )
  }
}

export default NotePage
