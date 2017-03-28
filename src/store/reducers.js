import { combineReducers } from 'redux'
import {
  CHANGE_NOTE,
  SWITCH_NOTE,
  SHOW_PAGE,
  SET_NOTE,
  TOGGLE_MODE,
} from './actions'

function note (state = {date: '', content: ''}, action = {}) {
  switch (action.type) {
    case CHANGE_NOTE:
      return Object.assign({}, state, {content: action.content})
    case SWITCH_NOTE:
      return {
        date: action.date,
        content: 'The note has been changed!',
      }
    case SET_NOTE:
      return {
        date: action.note.date,
        content: action.note.content,
      }
    default: return state
  }
}

function page (state = '', action = {}) {
  switch (action.type) {
    case SHOW_PAGE:
      return action.page
    default: return state
  }
}

function isPreview (state = true, action = {}) {
  switch (action.type) {
    case TOGGLE_MODE:
      return !state
    default: return state
  }
}

export default combineReducers({
  isPreview,
  note,
  page,
})
