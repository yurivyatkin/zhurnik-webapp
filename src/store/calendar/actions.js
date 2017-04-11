import * as types from './actionTypes'

export function changeDate (date) {
  return {
    type: types.CHANGE_DATE,
    date,
  }
}
