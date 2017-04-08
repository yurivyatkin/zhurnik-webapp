// Functions for handling date strings as equired by the app

// Simple padding with a zero
function pad (n) {
  return (n < 10) ? ('0' + n) : n
}

// Returns the date in YYYYMMDD format
export function getDateString (date) {
  return `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`
}

export default {
  pad,
  getDateString,
}
