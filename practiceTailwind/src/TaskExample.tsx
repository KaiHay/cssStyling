import { useState } from "react"
import { Task, type Task as TaskType } from "./App"

const exampleTask: TaskType = {
    title: "Sweep the Kitchen",
    description: "Get under the cabinets, do a good job",
    checked: false
}

export function TaskExample() {

    const [task, setTask] = useState(exampleTask)

    return (
        <div className='font-inter'>
            <div className='font-sans'><h1 className='font-bold'>Task</h1></div>
            <Task task={task} changedCheck={() => setTask({ ...task, checked: !task.checked })} />
        </div>
    )

}