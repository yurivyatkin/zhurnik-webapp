import * as types from './actionTypes'

const initialState = {
  currentNote: {
    date: '20170328',
    content: '# Hello!\n\nThis is *my* **note**!',
  },
  previewMode: false,
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_NOTE:
      return Object.assign({}, state, {currentNote: {
        date: state.currentNote.date,
        content: action.content,
      }})
    case types.SWITCH_NOTE:
      return Object.assign({}, state, {currentNote: {
        date: action.date,
        content: 'The note **has been** changed!',
      }})
    case types.SET_NOTE:
      return Object.assign({}, state, {currentNote: {
        date: action.note.date,
        content: action.note.content,
      }})
    case types.TOGGLE_MODE:
      return Object.assign({}, state, {previewMode: !state.previewMode})
    default: return state
  }
}

export function getCurrentNote (state) {
  return state.notes.currentNote
}

export function getPreviewMode (state) {
  return state.notes.previewMode
}
