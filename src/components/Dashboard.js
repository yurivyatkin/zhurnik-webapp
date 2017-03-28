import React from 'react'
import DateInput from './DateInput'
import ModeToggle from './ModeToggle'

const Dashboard = (props) => {
  return (
    <div className='dashboard'>
      <DateInput />
      <ModeToggle />
    </div>
  )
}

export default Dashboard
