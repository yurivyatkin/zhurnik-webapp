import React, { Component } from 'react'
import notesService from '../services/notes'
import { changeBuffer } from '../store/editor/actions'
import { getCurrentDate } from '../store/calendar/reducer'
import store from '../store'
import Dashboard from './Dashboard'
import TextPane from './TextPane'
import './App.css'

class App extends Component {
  componentDidMount () {
    const initialDate = getCurrentDate(store.getState())
    const initialBuffer = notesService.getNoteByDateFromLocalStorage(initialDate)
    store.dispatch(changeBuffer(initialBuffer))
  }

  render () {
    return (
      <div>
        <Dashboard />
        <TextPane />
      </div>
    )
  }
}

export default (App)
