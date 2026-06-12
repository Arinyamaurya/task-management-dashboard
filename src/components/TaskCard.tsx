import type { Task } from "../types/task"

interface TaskCardProps {
  task: Task
  updateTaskStatus: (id: number, newStatus: "Pending" | "Completed") => void
  onDelete: (id: number) => void
}

function TaskCard({ task, updateTaskStatus, onDelete }: TaskCardProps) {
  const isCompleted = task.status === "Completed"

  const priorityConfig: Record<Task["priority"], { badge: string; dot: string; bar: string }> = {
    Low: {
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/50 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-600",
      dot: "bg-emerald-500",
      bar: "bg-emerald-500",
    },
    Medium: {
      badge: "bg-amber-100 text-amber-800 dark:bg-amber-800/50 dark:text-amber-200 border border-amber-300 dark:border-amber-600",
      dot: "bg-amber-400",
      bar: "bg-amber-400",
    },
    High: {
      badge: "bg-rose-100 text-rose-800 dark:bg-rose-800/50 dark:text-rose-200 border border-rose-300 dark:border-rose-600",
      dot: "bg-rose-500",
      bar: "bg-rose-500",
    },
  }

  const statusConfig: Record<Task["status"], { badge: string }> = {
    Pending: {
      badge: "bg-orange-100 text-orange-800 dark:bg-orange-800/50 dark:text-orange-200 border border-orange-300 dark:border-orange-600",
    },
    Completed: {
      badge: "bg-blue-100 text-blue-800 dark:bg-blue-800/50 dark:text-blue-200 border border-blue-300 dark:border-blue-600",
    },
  }

  const priorityBarWidth = { Low: "w-1/3", Medium: "w-2/3", High: "w-full" }

  return (
    <div className={`
      group relative
      bg-white dark:bg-slate-800/80
      border rounded-2xl p-5 shadow-sm
      transition-all duration-200
      hover:shadow-md hover:-translate-y-0.5
      ${isCompleted
        ? "border-blue-200 dark:border-blue-800/50"
        : "border-slate-200 dark:border-slate-700/60"
      }
    `}>
      {/* Priority indicator bar at top */}
      <div className="absolute top-0 left-5 right-5 h-[3px] rounded-b-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div className={`h-full ${priorityConfig[task.priority].bar} ${priorityBarWidth[task.priority]} transition-all`} />
      </div>

      <div className="flex items-start justify-between gap-4 mt-1">
        {/* Left: checkbox + title */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <button
            onClick={() => updateTaskStatus(task.id, isCompleted ? "Pending" : "Completed")}
            className={`
              mt-0.5 flex-shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center
              transition-all duration-200
              ${isCompleted
                ? "bg-blue-500 border-blue-500 dark:bg-blue-500 dark:border-blue-500"
                : "border-slate-400 dark:border-slate-500 hover:border-indigo-500 dark:hover:border-indigo-400"
              }
            `}
            aria-label={isCompleted ? "Mark as pending" : "Mark as completed"}
          >
            {isCompleted && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
              </svg>
            )}
          </button>

          <h3 className={`
            text-sm font-semibold leading-snug
            ${isCompleted
              ? "line-through text-slate-400 dark:text-slate-500"
              : "text-slate-900 dark:text-white"
            }
          `}>
            {task.title}
          </h3>
        </div>

        {/* Right: delete */}
        <button
          onClick={() => onDelete(task.id)}
          className="
            flex-shrink-0 opacity-0 group-hover:opacity-100
            w-7 h-7 rounded-lg flex items-center justify-center
            text-slate-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/30
            transition-all duration-150
          "
          aria-label="Delete task"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>

      {/* Badges row */}
      <div className="flex items-center gap-2 mt-3 ml-8">
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${priorityConfig[task.priority].badge}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${priorityConfig[task.priority].dot}`} />
          {task.priority}
        </span>
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${statusConfig[task.status].badge}`}>
          {task.status}
        </span>
      </div>
    </div>
  )
}

export default TaskCard
