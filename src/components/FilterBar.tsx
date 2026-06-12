import type { Task } from "../types/task"


interface FilterBarProps {

priorityFilter:
| "All"
| Task["priority"]

statusFilter:
| "All"
| Task["status"]


setPriorityFilter:
React.Dispatch<
React.SetStateAction<
"All"
|
Task["priority"]
>
>


setStatusFilter:
React.Dispatch<
React.SetStateAction<
"All"
|
Task["status"]
>
>

}



function FilterBar({

priorityFilter,

statusFilter,

setPriorityFilter,

setStatusFilter,

}: FilterBarProps) {



return (

<div
className="
mt-6
flex
gap-4
"
>

{/* Priority */}

<select

value={priorityFilter}

onChange={(e)=>

setPriorityFilter(e.target.value as "All"|Task["priority"])

}

className="
border
p-2
rounded
"

>

<option>

All

</option>

<option>

Low

</option>

<option>

Medium

</option>

<option>

High

</option>

</select>



{/* Status */}

<select

value={statusFilter}

onChange={(e)=>

setStatusFilter(e.target.value as "All"|Task["status"])

}

className="
border
p-2
rounded
"

>

<option>

All

</option>

<option>

Pending

</option>

<option>

Completed

</option>

</select>

</div>

)

}


export default FilterBar