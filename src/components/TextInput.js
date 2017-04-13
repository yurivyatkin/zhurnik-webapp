import React from 'react'

const TextInput = (props) => {
  function handleChange (event) {
    const newBuffer = event.target.value
    props.changeBuffer(newBuffer)
  }

  return (
    <textarea
      className='text_input'
      onChange={handleChange}
      value={props.currentBuffer}
    />
  )
}

TextInput.propTypes = {
  changeBuffer: React.PropTypes.func.isRequired,
  currentBuffer: React.PropTypes.string.isRequired,
}

export default TextInput
