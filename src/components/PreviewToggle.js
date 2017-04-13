import React from 'react'

const PreviewToggle = (props) => {
  return (
    <form>
      <label htmlFor='mode'>Preview:</label>
      <input type='checkbox'
        checked={props.checked}
        onChange={() => props.togglePreview()}
      />
    </form>
  )
}

PreviewToggle.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  togglePreview: React.PropTypes.func.isRequired,
}

export default PreviewToggle
