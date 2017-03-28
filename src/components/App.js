import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotePage from './NotePage'
import './App.css'

class App extends Component {
  render () {
    var page

    // This is a stub for a navigation system:
    // passing a prop defines which page to render
    switch (this.props.page) {
      default:
        page = <NotePage />
    }

    return (
      <div className='App'>
        {page}
      </div>
    )
  }
}

App.propTypes = {
  page: React.PropTypes.string.isRequired,
}

function mapStateToProps (state, props) {
  return {
    page: state.pages.currentPage,
  }
}

export default connect(mapStateToProps)(App)
