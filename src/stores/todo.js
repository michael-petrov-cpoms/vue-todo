import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

const STORAGE_KEY = 'vue-todo-items'

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

  // Action: add a new todo
  function addTodo(text) {
    todos.value.push({
      id: Date.now(),
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
    addTodo,
    deleteTodo,
    toggleTodo
  }
})
