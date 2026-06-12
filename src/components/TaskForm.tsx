import { useState } from "react"
import type { Task } from "../types/task"


// Props type
interface TaskFormProps {

    tasks: Task[]

    setTasks: React.Dispatch<React.SetStateAction<Task[]>>

}


function TaskForm({ tasks, setTasks, }: TaskFormProps) {


    // State for input field
    const [title, setTitle] = useState("")


    // State for priority dropdown
    const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low")


    // State for status dropdown
    const [status, setStatus] = useState<"Pending" | "Completed">("Pending")



    function handleSubmit(e: React.FormEvent) {
        //
        e.preventDefault()


        // Prevent empty task
        if (!title.trim())
            return

        const newTask: Task = {

            id: Date.now(),

            title,

            priority,

            status,

        }


        // Add new task
        setTasks([...tasks, newTask,])



        // Reset form
        setTitle("")

        setPriority("Low")

        setStatus("Pending")

    }



    return (

        <form onSubmit={handleSubmit} className="bg-whiteshadowroundedp-6space-y-4mt-6">


            <div>

                <label>

                    Task Title

                </label>

                <input

                    type="text"

                    value={title}

                    onChange={(e) => setTitle(e.target.value)}

                    placeholder="Enter task"

                    className="w-fullborderp-2rounded"

                />

            </div>



            <div>

                <label>

                    Priority

                </label>

                <select

                    value={priority}

                    onChange={(e) => setPriority(e.target.value as Task["priority"])}

                    className="w-full border p-2 rounded"

                >

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

            </div>




            <div>

                <label>

                    Status

                </label>

                <select

                    value={status}

                    onChange={(e) => setStatus(e.target.value as Task["status"])}

                    className="w-fullborderp-2 rounded"

                >

                    <option>

                        Pending

                    </option>

                    <option>

                        Completed

                    </option>

                </select>

            </div>




            <button

                className="bg-blue-500text-whitepx-5 py-2 rounded"

            >

                Add Task

            </button>

        </form>

    )

}


export default TaskForm