# Raptodo

A delightfully retro todo app with a Windows 98 aesthetic.

**Live demo:** [raptodo.netlify.app](https://raptodo.netlify.app)

---

## What is this?

A simple, satisfying todo list that looks like it time-traveled from 1998. Add tasks, check them off, and feel the nostalgia.

### Features

- **Add, edit, and delete todos** — Click the pencil to edit, the X to delete
- **Filter your view** — See all, active, or completed tasks
- **Your data stays with you** — Todos are saved in your browser and persist across sessions, restarts, and even app updates
- **Fun window controls** — Try clicking minimize, maximize, and close for some surprises

### How long are my todos saved?

Forever! Well, until you clear your browser data. Your todos live in your browser's local storage, so they'll be waiting for you tomorrow, next week, or next month. Just don't clear your cookies and site data.

Note: Todos are saved per browser, so if you switch from Chrome to Firefox (or phone to laptop), you'll start fresh.

---

## For Developers

### Tech Stack

| Tool | Purpose |
|------|---------|
| [Vue 3](https://vuejs.org/) | UI framework (Composition API) |
| [Pinia](https://pinia.vuejs.org/) | State management |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Vitest](https://vitest.dev/) | Unit testing |
| [98.css](https://jdan.github.io/98.css/) | Windows 98 styling |

### Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Run tests
npm run test:unit

# Build for production
npm run build

# Lint code
npm run lint
```

### Project Structure

```
src/
├── App.vue              # Root component with window chrome
├── main.js              # App entry point
├── components/
│   ├── TodoInput.vue    # Add new todos
│   ├── TodoItem.vue     # Individual todo with edit/delete
│   ├── TodoList.vue     # Renders filtered todo list
│   └── TodoFilter.vue   # Filter buttons + clear completed
└── stores/
    └── todo.js          # Pinia store with localStorage persistence
```

### Deployment

The app auto-deploys to Netlify on every push to `main`. Netlify auto-detects Vite and handles the build—no configuration needed.

### IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue Official extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
