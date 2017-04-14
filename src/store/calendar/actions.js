import * as types from './actionTypes'
import store from '../../store'
import { getCurrentDate } from './reducer'
import { getCurrentBuffer } from '../editor/reducer'
import notesService from '../../services/notes'
import { changeBuffer } from '../editor/actions'

export function changeDate (date) {
  // Save the current note
  const state = store.getState()
  const currentDate = getCurrentDate(state)
  const currentBuffer = getCurrentBuffer(state)
  notesService.setNoteByDateToLocalStorage(currentDate, currentBuffer)
  // Load the new date's note
  const newBuffer = notesService.getNoteByDateFromLocalStorage(date)
  store.dispatch(changeBuffer(newBuffer))
  // Proceed to the action creation
  return {
    type: types.CHANGE_DATE,
    date,
  }
}
