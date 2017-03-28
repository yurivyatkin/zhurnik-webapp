import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import { toggleMode } from '../store/notes/actions'
import { getPreviewMode } from '../store/notes/reducer'

class ModeToggle extends React.Component {
  onToggle () {
    store.dispatch(toggleMode())
  }

  render () {
    return (
      <form>
        <label htmlFor='mode'>Preview:</label>
        <input type='checkbox'
          checked={this.props.checked}
          onChange={() => this.onToggle()}
        />
      </form>
    )
  }
}

ModeToggle.propTypes = {
  checked: React.PropTypes.bool.isRequired,
}

function mapStateToProps (state, props) {
  return {
    checked: getPreviewMode(state),
  }
}

export default connect(mapStateToProps)(ModeToggle)
