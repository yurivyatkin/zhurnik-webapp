import React, { PropTypes } from 'react'
import './DateButton.css'

const DateButton = (props) => {
  return (
    <button
      className='date-button'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

DateButton.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
}

export default DateButton
