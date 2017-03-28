import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showPage, setNote } from '../store/actions'
import store from '../store'
import NotePage from './NotePage'
import './App.css'

class App extends Component {
  componentWillMount = () => {
    const initialNote = {
      date: '20170320',
      content: 'This is my note!',
    }
    store.dispatch(setNote(initialNote))
    store.dispatch(showPage('note'))
  }

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
    page: state.page,
  }
}

export default connect(mapStateToProps)(App)
