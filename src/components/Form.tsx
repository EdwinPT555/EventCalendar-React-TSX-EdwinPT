import React from 'react'

interface Task {
  id: string;
  name: string;
}

interface FProps {
  dayid: string,
  setInputText: React.Dispatch<React.SetStateAction<string>>,
  inputText: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>,
  tasks: Task[],

}


const Form: React.FC<FProps> = ({ dayid, setInputText, inputText, setTasks, tasks }) => {

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  }
  // console.log(tasks);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTasks([...tasks, { id: dayid, name: inputText }])
    setInputText("");
    console.log(tasks);
  }

  return (
    <form className='form' onSubmit={handleSubmit} >
      <input type="text" className='task-input' onChange={handleInput} value={inputText} placeholder='Add Events here ...' required />
      <button className='task-button' type='submit'>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </form>
  )
}

export default Form
