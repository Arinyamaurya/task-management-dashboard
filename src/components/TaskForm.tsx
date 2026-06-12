import { useState } from "react"
import type { Task } from "../types/task"

interface TaskFormProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

function TaskForm({ tasks, setTasks }: TaskFormProps) {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState<"Low" | "Medium" | "High">("Low")
  const [status, setStatus] = useState<"Pending" | "Completed">("Pending")
  const [error, setError] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) {
      setError("Task title cannot be empty.")
      return
    }
    setError("")
    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      priority,
      status,
    }
    setTasks([...tasks, newTask])
    setTitle("")
    setPriority("Low")
    setStatus("Pending")
  }

  const labelClass = "block text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 mb-1.5"
  const inputClass = `
    w-full px-4 py-2.5 rounded-lg text-sm font-medium
    bg-slate-50 dark:bg-slate-900/80
    border border-slate-300 dark:border-slate-600
    text-slate-900 dark:text-white
    placeholder:text-slate-400 dark:placeholder:text-slate-500
    focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent
    transition-all duration-150
  `

  return (
    <div className="
      bg-white dark:bg-slate-800/80
      border border-slate-200 dark:border-slate-700/60
      rounded-2xl p-6 shadow-sm
    ">
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white text-sm font-bold">
          +
        </div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest">
          New Task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className={labelClass}>Task Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setError("") }}
            placeholder="What needs to be done?"
            className={inputClass}
          />
          {error && (
            <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400 font-semibold">{error}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as Task["priority"])}
              className={inputClass}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as Task["status"])}
              className={inputClass}
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="
            w-full mt-1 py-2.5 px-6 rounded-lg
            bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600
            text-white text-sm font-bold tracking-wide
            shadow-md shadow-indigo-200 dark:shadow-indigo-900
            transition-all duration-200 active:scale-[0.98]
          "
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm
