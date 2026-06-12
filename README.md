# Listora — Task Management Dashboard

A production-grade task management dashboard built with React, TypeScript, and Tailwind CSS. Features full light/dark mode theming, real-time filtering, priority tracking, and a live progress indicator.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)

---

## Live Demo

> Add your deployed link here (Vercel / Netlify)

---

## Screenshots

| Dark Mode | Light Mode |
|-----------|------------|
| *(add screenshot)* | *(add screenshot)* |

---

## Features

- **Add Tasks** — Create tasks with a title, priority level (Low / Medium / High), and status (Pending / Completed)
- **Filter Tasks** — Filter by priority and status using interactive chip buttons
- **Toggle Status** — Mark tasks complete or revert them to pending with a single click
- **Delete Tasks** — Remove tasks with a hover-reveal trash icon
- **Progress Bar** — Live completion rate calculated from current tasks
- **Stats Cards** — At-a-glance totals for all tasks, completed, pending, and high priority
- **Dark / Light Mode** — Full theme toggle with separate styling for each mode, preference saved to localStorage
- **Responsive Layout** — Two-column layout on desktop, stacked on mobile

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework with hooks |
| TypeScript | Type safety across all components |
| Tailwind CSS v4 | Utility-first styling |
| Vite | Build tool and dev server |

---

## Project Structure

```
src/
├── components/
│   ├── TaskForm.tsx       # Add new task form
│   ├── TaskCard.tsx       # Individual task card with status toggle
│   ├── TaskList.tsx       # Renders list of TaskCards
│   ├── FilterBar.tsx      # Priority & status filter chips
│   └── ThemeToggle.tsx    # Dark/light mode toggle
├── types/
│   └── task.ts            # Task interface definition
└── App.tsx                # Root component, state management
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/listora.git

# Navigate into the project
cd listora

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## How It Works

### State Management

All task state lives in `App.tsx` and is passed down via props — no external state library needed. This keeps the data flow explicit and easy to follow.

```
App.tsx (tasks state)
  ├── TaskForm     → adds tasks via setTasks
  ├── FilterBar    → reads/sets filter state
  └── TaskList
        └── TaskCard  → calls updateTaskStatus / onDelete
```

### Dark Mode

Tailwind's `darkMode: "class"` strategy is used. `ThemeToggle` adds or removes the `dark` class on `<html>`, which activates all `dark:` utility classes throughout the app. The user's preference is persisted in `localStorage`.

### Filtering

Tasks are filtered in `App.tsx` before being passed to `TaskList`. Priority and status filters are applied with `Array.filter()` — both filters combine with AND logic so users can narrow by both dimensions simultaneously.

---

## Author

Built by **[Your Name]**  
[GitHub](https://github.com/your-username) · [LinkedIn](https://linkedin.com/in/your-profile) · [Portfolio](https://yourportfolio.com)

---

## License

MIT License — feel free to use this project as a reference or template.
