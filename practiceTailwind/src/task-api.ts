
//types
type Task = {
    title: string,
    description: string,
    checked: boolean
}
type TaskList = Task[]

type taskProps = {
    task: Task,
    changedCheck: () => void;
}
type listTaskProp = {
    taskList: Task[],
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