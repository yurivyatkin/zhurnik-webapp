import * as types from './actionTypes'
import notesService from '../../services/notes'

export function changeNote (content) {
  return {
    type: types.CHANGE_NOTE,
    content,
  }
}

export function createNote (note) {
  return {
    type: types.CREATE_NOTE,
    note,
  }
}

export function fetchNote (date) {
  return async (dispatch) => {
    const note = await notesService.getNoteByDate(date)
    dispatch(setNote(note))
  }
}

export function setNote (note) {
  return {
    type: types.SET_NOTE,
    note,
  }
}

export function switchNote (date) {
  return {
    type: types.SWITCH_NOTE,
    date,
  }
}

export function updateNote (note) {
  return dispatch => {
    fetch(`/api/notes/${note.date}`, {
      method: 'put',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(handleUpdateResponse)
  }
}

function handleUpdateResponse () {
  // TODO
}

export function toggleMode () {
  return {
    type: types.TOGGLE_MODE,
  }
}
