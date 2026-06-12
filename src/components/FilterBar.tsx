import type { Task } from "../types/task"

interface FilterBarProps {
  priorityFilter: "All" | Task["priority"]
  statusFilter: "All" | Task["status"]
  setPriorityFilter: React.Dispatch<React.SetStateAction<"All" | Task["priority"]>>
  setStatusFilter: React.Dispatch<React.SetStateAction<"All" | Task["status"]>>
  totalCount: number
  filteredCount: number
}

function FilterBar({
  priorityFilter,
  statusFilter,
  setPriorityFilter,
  setStatusFilter,
  totalCount,
  filteredCount,
}: FilterBarProps) {

  const priorities: Array<"All" | Task["priority"]> = ["All", "Low", "Medium", "High"]
  const statuses: Array<"All" | Task["status"]> = ["All", "Pending", "Completed"]

  const priorityChipColor: Record<string, string> = {
    All: "bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-white border-slate-300 dark:border-slate-500",
    Low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-800/50 dark:text-emerald-200 border-emerald-300 dark:border-emerald-600",
    Medium: "bg-amber-100 text-amber-800 dark:bg-amber-800/50 dark:text-amber-200 border-amber-300 dark:border-amber-600",
    High: "bg-rose-100 text-rose-800 dark:bg-rose-800/50 dark:text-rose-200 border-rose-300 dark:border-rose-600",
  }

  const statusChipColor: Record<string, string> = {
    All: "bg-slate-200 text-slate-800 dark:bg-slate-600 dark:text-white border-slate-300 dark:border-slate-500",
    Pending: "bg-orange-100 text-orange-800 dark:bg-orange-800/50 dark:text-orange-200 border-orange-300 dark:border-orange-600",
    Completed: "bg-blue-100 text-blue-800 dark:bg-blue-800/50 dark:text-blue-200 border-blue-300 dark:border-blue-600",
  }

  return (
    <div className="
      bg-white dark:bg-slate-800/80
      border border-slate-200 dark:border-slate-700/60
      rounded-2xl p-5 shadow-sm
    ">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 mb-0.5">
            Filters
          </p>
          <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Showing <span className="font-bold text-indigo-600 dark:text-indigo-400">{filteredCount}</span> of{" "}
            <span className="font-bold text-slate-800 dark:text-white">{totalCount}</span> tasks
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Priority filter chips */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 mr-1">Priority:</span>
            {priorities.map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`
                  px-3 py-1 rounded-full text-xs font-bold border transition-all duration-150
                  ${priorityChipColor[p]}
                  ${priorityFilter === p
                    ? "ring-2 ring-offset-1 ring-indigo-500 dark:ring-offset-slate-800 scale-105"
                    : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Status filter chips */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 mr-1">Status:</span>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`
                  px-3 py-1 rounded-full text-xs font-bold border transition-all duration-150
                  ${statusChipColor[s]}
                  ${statusFilter === s
                    ? "ring-2 ring-offset-1 ring-indigo-500 dark:ring-offset-slate-800 scale-105"
                    : "opacity-70 hover:opacity-100"
                  }
                `}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
