import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import TextInput from './TextInput'
import { getCurrentNote, getPreviewMode } from '../store/notes/reducer'

const TextPane = (props) => {
  if (props.isPreview) {
    return (
      <div className='text_pane'>
        <ReactMarkdown
          className='react_markdown'
          source={props.textBuffer}
        />
      </div>
    )
  } else {
    return (
      <div className='text_pane'>
        <TextInput />
      </div>
    )
  }
}

TextPane.propTypes = {
  isPreview: React.PropTypes.bool.isRequired,
  textBuffer: React.PropTypes.string.isRequired,
}

function mapStateToProps (state, props) {
  return {
    isPreview: getPreviewMode(state),
    textBuffer: getCurrentNote(state).content,
  }
}

export default connect(mapStateToProps)(TextPane)
