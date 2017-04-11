import * as types from './actionTypes'

export function changeBuffer (buffer) {
  return {
    type: types.CHANGE_BUFFER,
    buffer,
  }
}

export function clearEdited () {
  return {
    type: types.CLEAR_EDITED,
  }
}

export function markEdited () {
  return {
    type: types.MARK_EDITED,
  }
}

export function togglePreview () {
  return {
    type: types.TOGGLE_PREVIEW,
  }
}
