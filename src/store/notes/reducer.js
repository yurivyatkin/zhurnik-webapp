import * as types from './actionTypes'

function pad (n) {
  return (n < 10) ? ('0' + n) : n
}

function getDateString (date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`
}

const initialState = {
  currentNote: {
    date: getDateString(new Date()),
    content: '',
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
