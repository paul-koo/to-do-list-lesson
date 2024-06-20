import { Fragment } from "react/jsx-runtime"
import { TasksType } from "./Todolist"
import { Button } from "./Button"

type ToDoListTaskListType = {
    tasks: TasksType
    date?: string
    removeTask: (val: number)=>void
    filter: (val: "all" | "active" | "completed")=>void
    checkBox: (val: number)=>void
}

export function ToDoListTaskList(props: ToDoListTaskListType) {
    return (
        <Fragment>
            <ul>
                {props.tasks.length === 0 ? 
                (<p>Dont task</p>) : 
                props.tasks.map((task)=> {
                    return (
                    <li key={task.id}>
                        <input type="checkbox" onClick={()=>props.checkBox(task.id)}/>
                        <span>{task.title}</span>
                        <Button title={"-"} click={()=> props.removeTask(task.id)}/>
                    </li>
                    )
                })
                }
            </ul>
            <div>
                <Button title={"All"} click={()=>props.filter('all')}/>
                <Button title={"Active"} click={()=>props.filter('active')}/>
                <Button title={"Completed"} click={()=>props.filter('completed')}/>
            </div>
            <div>{props.date}</div>
        </Fragment>
    )
}