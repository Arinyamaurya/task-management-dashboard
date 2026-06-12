import type { Task } from "../types/task"


// Define props coming from parent
interface TaskCardProps {

task: Task

}



function TaskCard({task}: TaskCardProps) {


// Dynamic color for priority
const priorityColor = {

Low:
"bg-green-200",

Medium:
"bg-yellow-200",

High:
"bg-red-200",

}


// Dynamic color for status
const statusColor = {

Pending:
"bg-orange-200",

Completed:
"bg-blue-200",

}



return (

<div className="border rounded p-4 shadow bg-white space-y-3">

{/* Task Title */}

<h2 className="text-lg font-semibold">

{task.title}

</h2>



{/* Priority */}

<div>

<span>

Priority:

</span>

<span

className={`ml-2 px-2 py-1
rounded
${priorityColor[
task.priority
]}
`}

>

{task.priority}

</span>

</div>



{/* Status */}

<div>

<span>

Status:

</span>

<span

className={`
ml-2
px-2
py-1
rounded
${statusColor[
task.status
]}
`}

>

{task.status}

</span>

</div>


</div>

)

}


export default TaskCard