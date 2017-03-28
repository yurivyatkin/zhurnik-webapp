import * as types from './actionTypes'

export function showPage (page) {
  return {
    type: types.SHOW_PAGE,
    page,
  }
}
