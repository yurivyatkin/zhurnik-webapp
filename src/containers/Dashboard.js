import React from 'react'
import { connect } from 'react-redux'
import DateButton from '../components/DateButton'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import 'react-toggle/style.css'
import Toggle from 'react-toggle'
import { changeDate } from '../store/calendar/actions'
import { getCurrentDate } from '../store/calendar/reducer'
import { togglePreview } from '../store/editor/actions'
import { isPreview } from '../store/editor/reducer'
import notesService from '../services/notes'
import './Dashboard.css'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      month: this.props.currentDate.substring(0, 6) + '01',
    }

    this.changeDate = this.changeDate.bind(this)
    this.handleMonthChange = this.handleMonthChange.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
  }

  togglePreview () {
    this.props.dispatch(togglePreview())
  }

  changeDate (date) {
    const dateString = moment(date).format('YYYYMMDD')
    this.props.dispatch(changeDate(dateString))
  }

  handleMonthChange (momentDate) {
    this.setState({
      month: (moment(momentDate._d).format('YYYYMMDD')),
    })
  }

  nonEmptyDatesInMonth (date) {
    return notesService
      .getListOfNonEmptyDatesInTheMonthFromLocalStorage(date)
      .map((item) => (moment(item, 'YYYYMMDD')))
  }

  render () {
    return (
      <div className='dashboard'>
        <DatePicker
          customInput={<DateButton />}
          dateFormat='MMMM Do YYYY'
          highlightDates={this.nonEmptyDatesInMonth(this.state.month)}
          onChange={this.changeDate}
          onMonthChange={this.handleMonthChange}
          selected={moment(this.props.currentDate, 'YYYYMMDD')}
        />
        <label className='preview-label'>
          <span>
            {this.props.isPreview ? 'Edit:' : 'View:'}
          </span>
          <Toggle
            defaultChecked={this.props.isPreview}
            onChange={this.togglePreview}
          />
        </label>
      </div>
    )
  }
}

Dashboard.propTypes = {
  currentDate: React.PropTypes.string.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  isPreview: React.PropTypes.bool.isRequired,
}

function mapStateToProps (state, props) {
  return {
    currentDate: getCurrentDate(state),
    isPreview: isPreview(state),
  }
}

export default connect(mapStateToProps)(Dashboard)
