import * as types from './actionTypes'
import store from '../../store'
import { isEdited } from '../editor/reducer'

export function changeBuffer (buffer) {
  // Mark as edited once
  if (!isEdited(store.getState())) {
    store.dispatch(markEdited())
  }

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
