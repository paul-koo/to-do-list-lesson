import { ToDoListAddTaskForm } from "./ToDoListAddTaskForm"
import { ToDoListHeader } from "./ToDoListHeader"
import { ToDoListTaskList } from "./ToDoListTaskList"

type TodolistPropsType = {
    title: string
    tasks: TasksType
    date?: string
    removeTask: (val: number)=>void
    filter: (elem: "all" | "active" | "completed")=>void
    checkBox: (val: number)=>void
}

export type TasksType = Array<TaskType>

export type TaskType = {
    id: number
    title: string
    isDone: boolean

}

export const Todolist = (props: TodolistPropsType) => {
    return (
      <div>
        <ToDoListHeader title={props.title}/>
        <ToDoListAddTaskForm/>
        <ToDoListTaskList tasks={props.tasks} date={props.date} removeTask={props.removeTask} filter={props.filter} checkBox={props.checkBox}/>
      </div>
    )
  }