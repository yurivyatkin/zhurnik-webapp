import React from 'react'

const DateInput = (props) => {
  function handleInput (e) {
    e.preventDefault()
    const newDate = document.getElementById('date_input').value
    props.changeDate(newDate)
  }

  return (
    <form onSubmit={handleInput} >
      <input id='date_input'
        type='text'
        className='date_input'
        defaultValue={props.currentDate}
      />
      <input type='submit' style={{display: 'none'}} />
    </form>
  )
}

DateInput.propTypes = {
  changeDate: React.PropTypes.func.isRequired,
  currentDate: React.PropTypes.string.isRequired,
}

export default DateInput
