export const CHANGE_NOTE = 'CHANGE_NOTE' // Change the content when editing
export const CREATE_NOTE = 'CREATE_NOTE' // Create a new note on the server
export const FETCH_NOTE = 'FETCH_NOTE' // Retrieve from the server
export const SET_NOTE = 'SET_NOTE' // Load the note's content
export const SWITCH_NOTE = 'SWITCH_NOTE' // Load another note when the date is changed
export const UPDATE_NOTE = 'UPDATE_NOTE' // Save the content to the server

export const SHOW_PAGE = 'SHOW_PAGE' // Show a page component

export const TOGGLE_MODE = 'TOGGLE_MODE' // Preview or edit

export function changeNote (content) {
  return {
    type: CHANGE_NOTE,
    content,
  }
}

export function createNote (note) {
  return {
    type: CREATE_NOTE,
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
    type: SET_NOTE,
    note,
  }
}

export function switchNote (date) {
  return {
    type: SWITCH_NOTE,
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

export function showPage (page) {
  return {
    type: SHOW_PAGE,
    page,
  }
}

export function toggleMode () {
  return {
    type: TOGGLE_MODE,
  }
}
