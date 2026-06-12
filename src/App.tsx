import { useState } from "react"
import type { Task } from "./types/task"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterBar from "./components/FilterBar"
import ThemeToggle from "./components/ThemeToggle"

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  const [priorityFilter, setPriorityFilter] = useState<"All" | Task["priority"]>("All")
  const [statusFilter, setStatusFilter] = useState<"All" | Task["status"]>("All")

  const updateTaskStatus = (id: number, newStatus: "Pending" | "Completed") => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    const priorityMatch = priorityFilter === "All" || task.priority === priorityFilter
    const statusMatch = statusFilter === "All" || task.status === statusFilter
    return priorityMatch && statusMatch
  })

  const completedCount = tasks.filter((t) => t.status === "Completed").length
  const pendingCount = tasks.filter((t) => t.status === "Pending").length
  const highPriorityCount = tasks.filter((t) => t.priority === "High" && t.status === "Pending").length
  const completionRate = tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#0b0f1a] transition-colors duration-300">
      {/* Top Nav */}
      <header className="
        sticky top-0 z-20
        border-b border-slate-200 dark:border-slate-700/60
        bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md
      ">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-indigo-200 dark:shadow-indigo-900">
              T
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base">
              Outliner
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-6">
        {/* Page title */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Task Dashboard
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
            Manage and track your tasks ~
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              label: "Total Tasks",
              value: tasks.length,
              icon: "📋",
              color: "text-slate-900 dark:text-white",
              bg: "bg-white dark:bg-slate-800/80",
            },
            {
              label: "Completed",
              value: completedCount,
              icon: "✅",
              color: "text-blue-600 dark:text-blue-300",
              bg: "bg-white dark:bg-slate-800/80",
            },
            {
              label: "Pending",
              value: pendingCount,
              icon: "⏳",
              color: "text-orange-600 dark:text-orange-300",
              bg: "bg-white dark:bg-slate-800/80",
            },
            {
              label: "High Priority",
              value: highPriorityCount,
              icon: "🔥",
              color: "text-rose-600 dark:text-rose-300",
              bg: "bg-white dark:bg-slate-800/80",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`
                ${stat.bg} rounded-2xl p-4
                border border-slate-200 dark:border-slate-700/60 shadow-sm
              `}
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        {tasks.length > 0 && (
          <div className="
            bg-white dark:bg-slate-800/80
            border border-slate-200 dark:border-slate-700/60
            rounded-2xl px-5 py-4 shadow-sm
          ">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
                Overall Progress
              </span>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {completionRate}%
              </span>
            </div>
            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-700"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1.5">
              {completedCount} of {tasks.length} tasks completed
            </p>
          </div>
        )}

        {/* Two-column layout on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
          {/* Left: form */}
          <div className="lg:sticky lg:top-24">
            <TaskForm tasks={tasks} setTasks={setTasks} />
          </div>

          {/* Right: filter + list */}
          <div className="space-y-4">
            <FilterBar
              priorityFilter={priorityFilter}
              statusFilter={statusFilter}
              setPriorityFilter={setPriorityFilter}
              setStatusFilter={setStatusFilter}
              totalCount={tasks.length}
              filteredCount={filteredTasks.length}
            />
            <TaskList
              tasks={filteredTasks}
              updateTaskStatus={updateTaskStatus}
              onDelete={deleteTask}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Outliner · Built with React & TypeScript
        </p>
      </footer>
    </div>
  )
}

export default App
