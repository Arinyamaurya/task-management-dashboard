import type { Task } from "../types/task"
import TaskCard from "./TaskCard"

interface TaskListProps {
  tasks: Task[]
  updateTaskStatus: (id: number, newStatus: "Pending" | "Completed") => void
  onDelete: (id: number) => void
}

function TaskList({ tasks, updateTaskStatus, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="
        flex flex-col items-center justify-center
        py-16 px-8
        bg-white dark:bg-slate-800/80
        border border-dashed border-slate-300 dark:border-slate-600
        rounded-2xl text-center
      ">
        <div className="
          w-16 h-16 rounded-2xl mb-4
          bg-slate-100 dark:bg-slate-700
          flex items-center justify-center text-3xl
        ">
          📋
        </div>
        <p className="text-sm font-bold text-slate-800 dark:text-white mb-1">
          No tasks found
        </p>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Add a new task above or adjust your filters
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          updateTaskStatus={updateTaskStatus}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default TaskList
