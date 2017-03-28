import * as types from './actionTypes'

const initialState = {
  currentPage: 'note',
}

export default function page (state = initialState, action = {}) {
  switch (action.type) {
    case types.SHOW_PAGE:
      return Object.assign({}, state, {currentPage: action.page})
    default:
      return state
  }
}

export function getCurrentpage (state) {
  return state.currentPage
}
