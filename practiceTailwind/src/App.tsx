import { useState } from 'react'
import './App.css'
import clsx from 'clsx'

//types
type Task = {
  title: string,
  description: string,
  checked: boolean
}
type TaskList = {Task[]}
//exs
const exampleTask: Task = {
  title: "Sweep the Kitchen",
  description: "Get under the cabinets, do a good job",
  checked: false
}

//funcs
function OutTask = (): => {

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
      <div className={clsx('flex flex-row items-center rounded-md border w-md border-lightgray', checked && 'bg-lightgreen')}>
        <div className='flex pl-5'>
          <button onClick={() => changeCheck(exampleTask)} className={clsx('border border-lightgray w-5 aspect-square rounded-md ', checked && 'bg-darkgreen')} />
        </div>
        <div className='flex-col p-4'>

          <div className='font-med'>{exampleTask.title}</div>
          <div className='text-medgray font-light text-sm'>{exampleTask.description}</div>
        </div>
      </div>
    </div>
  )
}

export default App
