import { useState } from "react"

import type { Task } from "./types/task"

import TaskForm from "./components/TaskForm"

import TaskList from "./components/TaskList"

import FilterBar from "./components/FilterBar"



function App() {


// Main task state
const [tasks, setTasks] =
useState<Task[]>([])



// Filter states
const [

priorityFilter,

setPriorityFilter,

] = useState<
"All"
|
Task["priority"]

>("All")



const [

statusFilter,

setStatusFilter,

] = useState<
"All"
|
Task["status"]

>("All")





// Edit Task Status
const updateTaskStatus = (

id:number,

newStatus:
"Pending"
|
"Completed"

)=>{

setTasks((prev)=>

prev.map((task)=>

task.id===id

?

{

...task,

status:newStatus,

}

:

task

)

)

}





// Filter Logic
const filteredTasks =

tasks.filter((task)=>{

const priorityMatch =

priorityFilter==="All"

||

task.priority===priorityFilter



const statusMatch =

statusFilter==="All"

||

task.status===statusFilter



return (

priorityMatch

&&

statusMatch

)

})





return (

<div

className="
max-w-3xl
mx-auto
p-8
"

>

<h1

className="
text-4xl
font-bold
mb-6
"

>

Task Dashboard

</h1>



{/* Add Task */}

<TaskForm

tasks={tasks}

setTasks={setTasks}

/>



{/* Filters */}

<FilterBar

priorityFilter={
priorityFilter
}

statusFilter={
statusFilter
}

setPriorityFilter={
setPriorityFilter
}

setStatusFilter={
setStatusFilter
}

/>



{/* Task List */}

<TaskList

tasks={
filteredTasks
}

updateTaskStatus={updateTaskStatus}

/>


</div>

)

}



export default App