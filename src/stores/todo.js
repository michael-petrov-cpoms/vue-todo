import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // State: reactive array of todos
  const todos = ref([])

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

  return {
    todos,
    completedTodos,
    activeTodos,
    activeCount,
    addTodo,
    deleteTodo
  }
})
