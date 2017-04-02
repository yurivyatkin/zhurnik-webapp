import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { changeNote } from '../store/notes/actions'
import { getCurrentNote } from '../store/notes/reducer'

class TextInput extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    const newBuffer = event.target.value
    store.dispatch(changeNote(newBuffer))
  }

  render () {
    return (
      <textarea
        className='text_input'
        onChange={this.handleChange}
        value={this.props.textBuffer}
      />
    )
  }
}

TextInput.propTypes = {
  textBuffer: React.PropTypes.string.isRequired,
}

function mapStateToProps (state, props) {
  return {
    textBuffer: getCurrentNote(state).content,
  }
}

export default connect(mapStateToProps)(TextInput)
