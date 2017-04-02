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
}

export default new NotesService()
