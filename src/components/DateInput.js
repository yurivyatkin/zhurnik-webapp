import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { fetchNote } from '../store/notes/actions'

const DateInput = (props) => {
  function handleInput (e) {
    e.preventDefault()
    const newDate = document.getElementById('date_input').value
    store.dispatch(fetchNote(newDate))
  }

  return (
    <form onSubmit={handleInput} >
      <input id='date_input'
        type='text'
        className='date_input'
        defaultValue={props.date}
      />
      <input type='submit' style={{display: 'none'}} />
    </form>
  )
}

DateInput.propTypes = {
  date: React.PropTypes.string.isRequired,
}

function mapStateToProps (state, props) {
  return {
    date: state.notes.currentNote.date,
  }
}

export default connect(mapStateToProps)(DateInput)
