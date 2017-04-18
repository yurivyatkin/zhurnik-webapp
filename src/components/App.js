import React, { Component } from 'react'
import notesService from '../services/notes'
import { changeBuffer, clearEdited } from '../store/editor/actions'
import { getCurrentDate } from '../store/calendar/reducer'
import { getCurrentBuffer, isEdited } from '../store/editor/reducer'
import store from '../store'
import Dashboard from '../containers/Dashboard'
import Editor from '../containers/Editor'

class App extends Component {
  onUnload () {
    if (isEdited(store.getState())) {
      const state = store.getState()
      const currentDate = getCurrentDate(state)
      const currentBuffer = getCurrentBuffer(state)
      notesService
        .setNoteByDateToLocalStorage(currentDate, currentBuffer)
      return null
    } else {
      return null
    }
  }

  componentDidMount () {
    // Load today's note when the app has started
    const initialDate = getCurrentDate(store.getState())
    const initialBuffer = notesService.getNoteByDateFromLocalStorage(initialDate)
    store.dispatch(changeBuffer(initialBuffer))
    store.dispatch(clearEdited()) // because the note is just loaded
    // Add handling app's closing events
    window.onbeforeunload = this.onUnload
  }

  render () {
    return (
      <div>
        <Dashboard />
        <Editor />
      </div>
    )
  }
}

export default (App)
