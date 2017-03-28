import * as types from './actionTypes'

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
  return dispatch => {
    fetch(`/api/notes/${date}`)
      .then(res => res.json())
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
