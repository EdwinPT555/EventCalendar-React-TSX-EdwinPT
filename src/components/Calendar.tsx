import React, { useState } from 'react'
import Popup from './Popup'



const Calendar: React.FC<Props> = ({ months, year, currMonth, prevDays, currDays, nextMonth, prevMonth, mn }): JSX.Element => {

  const [today, setToday] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  const [dayid, setDayId] = useState('')

  const togglePopup = (e: React.MouseEvent<HTMLElement>) => {
    setDayId(e.currentTarget.id);
    setIsOpen(!isOpen);
    // console.log(dayid);
  }

  return (
    <div className="calendar">
      <div className="month">
        <div className="prev" onClick={() => prevMonth(mn)}>
          <h2>&#10094;</h2>
        </div>
        <div>
          <h2 id="month">{currMonth} {year}</h2>
          <p id="date_str">{today.toDateString()}</p>
        </div>
        <div className="next" onClick={() => nextMonth(mn)}>
          <h2>&#10095;</h2>
        </div>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days">
        { }
        {prevDays.map(day => (<div className='prev-date' key={day}>{day}</div>))}
        {currDays.map(day => (year + currMonth + day === today.getFullYear() + months[today.getMonth()] + today.getDate()) ? <div className='today' id={day + currMonth + year} key={day} onClick={togglePopup}>{day}</div> : <div id={day + currMonth + year} onClick={togglePopup} key={day}>{day}</div>)}

      </div>

      {isOpen && <Popup handleClose={togglePopup} dayid={dayid} />}
    </div >
  )
}

export default Calendar
