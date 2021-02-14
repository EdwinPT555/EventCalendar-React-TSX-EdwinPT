import React, { useEffect, useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'


const App: React.FC = () => {

  const [dt, setDt] = useState(new Date());

  const [date, setDate] = useState(dt.setDate(1));
  const [day, setDay] = useState(dt.getDay())
  const [endDate, setEndDate] = useState(new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate())
  const [prevDate, setPrevDate] = useState(new Date(dt.getFullYear(), dt.getMonth(), 0))
  const [months, setMonths] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"])
  const [currMonth, setCurrMonth] = useState(months[dt.getMonth()]);
  const [year, setYear] = useState(dt.getFullYear());
  var prevDays = [];
  var currDays = [];

  useEffect(() => {
    setDate(dt.setDate(1));
    setDay(dt.getDay());
    setEndDate(new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate());
    setPrevDate(new Date(dt.getFullYear(), dt.getMonth(), 0));
    setCurrMonth(months[dt.getMonth()]);
    setYear(dt.getFullYear());
  }, [dt])

  for (let x = day; x > 0; x--) {
    prevDays.push(prevDate.getDate() - x + 1)
  }
  for (let i = 1; i <= endDate; i++) {
    currDays.push(i)
  }

  const prevMonth = (mon: number) => {               //For Render Previous month
    mon--
    setDt(new Date(dt.getFullYear(), mon, 1))
  }
  const nextMonth = (mon: number) => {               //For Render Next month
    mon++
    setDt(new Date(dt.getFullYear(), mon, 1))
  }

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  return (
    <div className='container'>
      <Calendar prevMonth={prevMonth} year={year} nextMonth={nextMonth} months={months} currMonth={currMonth} prevDays={prevDays} currDays={currDays} mn={dt.getMonth()} />

      <a href='' onClick={clearLocalStorage} className="float">
        <i className="fa fa-trash my-float" aria-hidden="true"></i>
      </a>
      <div className="label-container">
        <div className="label-text">Clear All Task</div>
        <i className="fa fa-play label-arrow"></i>
      </div>
    </div>
  )
}

export default App
