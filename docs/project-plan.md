# Vue Todo App - Project Plan

## Overview

A learning project for Vue 3 fundamentals, built as part of Q4 goals.

## Requirements

### 1. Todo List (with localStorage)

- **Add, edit, delete, and filter tasks** (e.g. completed vs. active)
- **Save tasks in `localStorage`** so they persist after refresh
- **Bonus:** Use `Pinia` for store management

### 2. Visual Design

- **Windows 98 aesthetic** using [98.css](https://jdan.github.io/98.css/) library
- Classic window chrome, buttons, and form elements

### Vue Concepts to Learn

- Reactivity
- List rendering
- Computed properties
- Composables

## Tech Stack

- **Vue 3** - Progressive JavaScript framework (Composition API)
- **Pinia** - State management for Vue
- **Vite** - Build tool and dev server
- **Vitest** - Unit testing framework
- **ESLint** - Code linting
- **98.css** - Windows 98 CSS library

## Project Structure

```
src/
├── App.vue              # Root component
├── main.js              # App entry point
├── components/          # Vue components
├── stores/              # Pinia stores
└── assets/              # Static assets
```

## Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run test     # Run unit tests
npm run lint     # Run ESLint
```

## Implementation Phases

### Phase 1: Pinia Store
- Create todo store with state, getters, actions
- Implement localStorage persistence

### Phase 2: Components
- TodoList - main container
- TodoItem - individual todo with edit/delete
- TodoInput - form for adding new todos
- TodoFilter - filter buttons

### Phase 3: Testing
- Unit tests for store logic
- Component tests
