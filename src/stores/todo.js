import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'vue-todo-items'

// Counter ensures unique IDs even when Date.now() returns same value
let idCounter = 0

export const useTodoStore = defineStore('todo', () => {
  // State: load from localStorage or start empty
  const saved = localStorage.getItem(STORAGE_KEY)
  const todos = ref(saved ? JSON.parse(saved) : [])

  // Getters: derived state using computed()
  const completedTodos = computed(() =>
    todos.value.filter(todo => todo.completed)
  )

  const activeTodos = computed(() =>
    todos.value.filter(todo => !todo.completed)
  )

  const activeCount = computed(() => activeTodos.value.length)

  // Getter: todos filtered by current filter selection
  const filteredTodos = computed(() => {
    if (filter.value === 'active') return activeTodos.value
    if (filter.value === 'completed') return completedTodos.value
    return todos.value
  })

  // UI State: current filter ('all', 'active', 'completed')
  const filter = ref('all')

  // Action: set the current filter
  function setFilter(newFilter) {
    filter.value = newFilter
  }

  // Action: add a new todo
  function addTodo(text) {
    todos.value.push({
      id: Date.now() + idCounter++,
      text,
      completed: false
    })
  }

  // Action: delete a todo by id
  function deleteTodo(id) {
    const index = todos.value.findIndex(todo => todo.id === id)
    if (index !== -1) {
      todos.value.splice(index, 1)
    }
  }

  // Action: toggle a todo's completed status
  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  // Action: update a todo's text
  function updateTodo(id, newText) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.text = newText
    }
  }

  // Action: remove all completed todos
  function clearCompleted() {
    todos.value = todos.value.filter(todo => !todo.completed)
  }

  // Persist to localStorage on any change
  watch(
    todos,
    (newTodos) => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
    },
    { deep: true }
  )

  return {
    todos,
    completedTodos,
    activeTodos,
    activeCount,
    filteredTodos,
    filter,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
    clearCompleted,
    setFilter
  }
})
