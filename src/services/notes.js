class NotesService {
  async getNoteByDate (date) {
    const url = `/api/notes/${date}`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(`NotesService getNoteByDate failed, HTTP status ${response.status}`)
    }
    const data = await response.json()
    if (data === null) {
      return ({date, content: ''})
    }
    return data
  }

  async setNoteByDate (date, content) {
    const url = `/api/notes/${date}`
    const response = await fetch(url, {
      method: 'PUT',
      body: `{"date":"${date}","content":"${content}"}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error(`NotesService setNoteByDate failed, HTTP status ${response.status}`)
    }
    const data = await response.json()
    return data
  }

  getNoteByDateFromLocalStorage (date) {
    return window.localStorage.getItem(`zhurnik.${date}`) || ''
  }

  setNoteByDateToLocalStorage (date, content) {
    window.localStorage.setItem(`zhurnik.${date}`, content)
  }

  getListOfNonEmptyDatesInTheMonthFromLocalStorage (date) {
    return Object.keys(window.localStorage)
      .filter((key) => (key.includes('zhurnik')))
      .filter((key) => (window.localStorage.getItem(key).length !== 0))
      .map((key) => (key.split('.')[1]))
      .filter((item) => (item.substring(4, 6)) === date.substring(4, 6))
  }
}
export default new NotesService()
