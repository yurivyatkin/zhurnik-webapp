import * as types from './actionTypes'
import { getDateString } from '../../lib/dateHelpers'

const initialState = {
  currentDate: getDateString(new Date()),
}

export default function reducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.CHANGE_DATE:
      return Object.assign({}, state, {
        currentDate: action.date,
      })
    default: return state
  }
}

export function getCurrentDate (state) {
  return state.currentDate
}
