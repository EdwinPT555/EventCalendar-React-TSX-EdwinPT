import React, { useEffect, useState } from 'react'
import Form from './Form'
import TodoList from './TodoList'

type Task = {
  id: string;
  name: string;
}
interface PProps {
  handleClose: (e: React.MouseEvent<HTMLElement>) => void,
  dayid: string,
}


const Popup: React.FC<PProps> = ({ handleClose, dayid }) => {

  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getLocalTasks();
  }, [])

  useEffect(() => {
    saveLocalTasks();
  }, [tasks])

  const saveLocalTasks = () => {
    localStorage.setItem(`${dayid}`, JSON.stringify(tasks))
  }
  const getLocalTasks = () => {
    if (localStorage.getItem(`${dayid}`) === null) {
      localStorage.setItem(`${dayid}`, JSON.stringify([]));
    } else {
      var taskLocal = JSON.parse(localStorage.getItem(`${dayid}`) || '{}');
      setTasks(taskLocal)
    }
  }

  return (
    <div className='popup-box'>
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>

        <header>
          <h1>Event Manager</h1>
          <h2>{dayid}</h2>
        </header>

        <Form dayid={dayid} setInputText={setInputText} inputText={inputText} setTasks={setTasks} tasks={tasks} />
        <TodoList tasks={tasks} setTasks={setTasks} />

      </div>
    </div>
  )
}

export default Popup
