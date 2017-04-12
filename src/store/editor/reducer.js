import * as types from './actionTypes'

const initialState = {
  currentBuffer: '',
  isEdited: false,
  isPreview: false,
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_BUFFER:
      return Object.assign({}, state, {
        currentBuffer: action.buffer,
      })
    case types.CLEAR_EDITED:
      return Object.assign({}, state, {
        isEdited: false,
      })
    case types.MARK_EDITED:
      return Object.assign({}, state, {
        isEdited: true,
      })
    case types.TOGGLE_PREVIEW:
      return Object.assign({}, state, {
        isPreview: !state.isPreview,
      })
    default: return state
  }
}

export function getCurrentBuffer (state) {
  return state.editor.currentBuffer
}

export function isEdited (state) {
  return state.editor.isEdited
}

export function isPreview (state) {
  return state.editor.isPreview
}
