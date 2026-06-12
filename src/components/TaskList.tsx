import type { Task } from "../types/task"

import TaskCard from "./TaskCard"


interface TaskListProps {

tasks: Task[]

updateTaskStatus:(

id:number,

newStatus:
"Pending"
|
"Completed"

)=>void

}



function TaskList({

tasks,

updateTaskStatus,

}: TaskListProps) {



if(tasks.length===0){

return(

<div
className="
mt-6
text-center
text-gray-500
"
>

No Tasks Available

</div>

)

}



return (

<div
className="
mt-6
space-y-4
"
>

{

tasks.map((task)=>(

<TaskCard

key={task.id}

task={task}

updateTaskStatus={
updateTaskStatus
}

/>

))

}

</div>

)

}


export default TaskList