import { useEffect, useState } from "react"

function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle theme"
      className="
        relative flex items-center gap-2
        px-4 py-2 rounded-xl text-sm font-semibold
        border border-slate-300 dark:border-slate-600
        bg-white dark:bg-slate-800
        text-slate-800 dark:text-white
        hover:bg-slate-100 dark:hover:bg-slate-700
        transition-all duration-200 shadow-sm
      "
    >
      <span className="text-base leading-none">
        {dark ? "☀️" : "🌙"}
      </span>
      <span>{dark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  )
}

export default ThemeToggle
