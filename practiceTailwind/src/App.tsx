import { useState, type JSX } from 'react'
import './App.css'
import clsx from 'clsx'

//types
export type Task = {
  title: string,
  description: string,
  checked: boolean
}
type TaskList = Task[]

type taskProps = {
  task: Task,
  onClick: () => void;
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
export const Task = ({ task, onClick }: taskProps): JSX.Element => {
  return (
    <div className={clsx('flex flex-row items-center rounded-md border w-md border-lightgray', task.checked && 'bg-lightgreen')}>
      <div className='flex pl-5'>
        <button onClick={onClick} className={clsx('border border-lightgray w-5 aspect-square rounded-md ', task.checked && 'bg-darkgreen')} />
      </div>
      <div className='flex-col p-4'>

        <div className='font-med'>{task.title}</div>
        <div className='text-medgray font-light text-sm'>{task.description}</div>
      </div>
    </div>
  )

}

const TaskList = (): JSX.Element => {
  const sortedExampleList = exList.sort((task1, task2) => task1.checked ? -1 : 1)
  const [taskList, setTaskList] = useState(sortedExampleList)

  function checkTask(idx: number) {
    const newTaskList = structuredClone(taskList)
    newTaskList[idx].checked = !newTaskList[idx].checked
    // re-order the tasks
    const orderedTaskList = newTaskList.sort((task1, task2) => task1.checked ? -1 : 1)
    setTaskList(orderedTaskList)

  }
  return (
    <div className='flex flex-col pl-5'>
      {taskList.map((task, idx) => {
        return (
          <div className='pb-3'>
            <Task task={task} onClick={() => checkTask(idx)} />
          </div>
        )
      })}
      {/* {JSON.stringify(taskList)} */}
    </div>
  )
}

function App() {

  return (
    <div className='font-inter'>
      <div className='font-sans'><h1 className='font-bold'>Task List</h1></div>
      <TaskList />
    </div>
  )
}

export default App
