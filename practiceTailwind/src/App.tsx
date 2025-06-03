import { useState, type JSX } from 'react'
import './App.css'
import clsx from 'clsx'

//types
type Task = {
  title: string,
  description: string,
  checked: boolean
}
type TaskList = Task[]

type taskProps = {
  task: Task,
  changedCheck: (task: Task) => void;
}
//exs
const exampleTask: Task = {
  title: "Sweep the Kitchen",
  description: "Get under the cabinets, do a good job",
  checked: false
}

const exampleTask2: Task = {
  title: "Laundry",
  description: "Wash and dry",
  checked: false
}
const Dishwashing: Task = {
  title: "Dishwashing",
  description: "wash and dry dishes, potst, pans, and utensils",
  checked: true
}
const exList: TaskList = [exampleTask, exampleTask2, Dishwashing]

//funcs
const OutTask = ({ task, changedCheck }: taskProps): JSX.Element => {
  return (<div className={clsx('flex flex-row items-center rounded-md border w-md border-lightgray', task.checked && 'bg-lightgreen')}>
    <div className='flex pl-5'>
      <button onClick={() => changedCheck(task)} className={clsx('border border-lightgray w-5 aspect-square rounded-md ', task.checked && 'bg-darkgreen')} />
    </div>
    <div className='flex-col p-4'>

      <div className='font-med'>{task.title}</div>
      <div className='text-medgray font-light text-sm'>{task.description}</div>
    </div>
  </div>)

}

function App() {
  const [checked, setCheck] = useState(false)
  const changeCheck = (task: Task) => {
    task.checked = !task.checked
    setCheck(task.checked)
  }

  return (
    <div className='font-inter'>
      <div className='font-sans'><h1 className='font-bold'>Task</h1></div>
      <OutTask task={exampleTask} changedCheck={() => changeCheck(exampleTask)} />
    </div>
  )
}

export default App
