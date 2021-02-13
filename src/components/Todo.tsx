import React from 'react'

interface Task {
  id: string;
  name: string;
}
interface Props {
  todo: Task,
  text: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[],
}

const Todo: React.FC<Props> = ({ todo, text, tasks, setTasks }) => {

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    setTasks(tasks.filter(el => el.name !== todo.name))
  }


  return (
    <div className='task'>
      <li className="task-item">{text}</li>
      <button className='trash-btn' onClick={handleDelete} >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo
