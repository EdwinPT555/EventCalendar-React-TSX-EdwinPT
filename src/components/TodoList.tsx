import React from 'react'
import Todo from './Todo'

interface Task {
  id: string;
  name: string;
}
interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[],
}

const TodoList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div className='task-container'>
      <ul className="task-list">
        {tasks.map(todo => (
          <Todo key={todo.id} todo={todo} text={todo.name} tasks={tasks} setTasks={setTasks} />
        ))}

      </ul>
    </div>
  )
}

export default TodoList
