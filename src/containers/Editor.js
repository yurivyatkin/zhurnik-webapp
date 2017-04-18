import React from 'react'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import { getCurrentBuffer, isPreview } from '../store/editor/reducer'
import { changeBuffer } from '../store/editor/actions'
import './Editor.css'

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.changeBuffer = this.changeBuffer.bind(this)
  }

  changeBuffer (buffer) {
    this.props.dispatch(changeBuffer(buffer))
  }

  render () {
    if (this.props.isPreview) {
      return (
        <div className='editor'>
          <ReactMarkdown
            className='react_markdown'
            source={this.props.currentBuffer}
          />
        </div>
      )
    } else {
      return (
        <div className='editor'>
          <CodeMirror
            onChange={this.changeBuffer}
            options={{mode: 'markdown'}}
            value={this.props.currentBuffer}
          />
        </div>
      )
    }
  }
}

Editor.propTypes = {
  currentBuffer: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  isPreview: React.PropTypes.bool.isRequired,
}

function mapStateToProps (state, props) {
  return {
    isPreview: isPreview(state),
    currentBuffer: getCurrentBuffer(state),
  }
}

export default connect(mapStateToProps)(Editor)
