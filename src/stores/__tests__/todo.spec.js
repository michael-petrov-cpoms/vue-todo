import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from '../todo'

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
}
vi.stubGlobal('localStorage', localStorageMock)

describe('Todo Store', () => {
  let store

  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia())
    store = useTodoStore()
    // Clear mock calls between tests
    vi.clearAllMocks()
  })

  describe('addTodo', () => {
    it('adds a new todo to the list', () => {
      store.addTodo('Learn Vue')

      expect(store.todos).toHaveLength(1)
      expect(store.todos[0].text).toBe('Learn Vue')
      expect(store.todos[0].completed).toBe(false)
    })

    it('assigns unique ids to todos', () => {
      store.addTodo('First todo')
      store.addTodo('Second todo')

      expect(store.todos[0].id).not.toBe(store.todos[1].id)
    })
  })

  describe('deleteTodo', () => {
    it('removes a todo by id', () => {
      store.addTodo('To be deleted')
      const todoId = store.todos[0].id

      store.deleteTodo(todoId)

      expect(store.todos).toHaveLength(0)
    })

    it('does nothing if id not found', () => {
      store.addTodo('Keep me')

      store.deleteTodo(99999)

      expect(store.todos).toHaveLength(1)
    })
  })

  describe('toggleTodo', () => {
    it('toggles completed status from false to true', () => {
      store.addTodo('Toggle me')
      const todoId = store.todos[0].id

      store.toggleTodo(todoId)

      expect(store.todos[0].completed).toBe(true)
    })

    it('toggles completed status from true to false', () => {
      store.addTodo('Toggle me back')
      const todoId = store.todos[0].id
      store.toggleTodo(todoId) // false -> true

      store.toggleTodo(todoId) // true -> false

      expect(store.todos[0].completed).toBe(false)
    })
  })

  describe('updateTodo', () => {
    it('updates the text of a todo', () => {
      store.addTodo('Original text')
      const todoId = store.todos[0].id

      store.updateTodo(todoId, 'Updated text')

      expect(store.todos[0].text).toBe('Updated text')
    })
  })

  describe('clearCompleted', () => {
    it('removes all completed todos', () => {
      store.addTodo('Active todo')
      store.addTodo('Completed todo')
      store.toggleTodo(store.todos[1].id)

      store.clearCompleted()

      expect(store.todos).toHaveLength(1)
      expect(store.todos[0].text).toBe('Active todo')
    })
  })

  describe('getters', () => {
    beforeEach(() => {
      store.addTodo('Active 1')
      store.addTodo('Active 2')
      store.addTodo('Completed 1')
      store.toggleTodo(store.todos[2].id)
    })

    it('completedTodos returns only completed todos', () => {
      expect(store.completedTodos).toHaveLength(1)
      expect(store.completedTodos[0].text).toBe('Completed 1')
    })

    it('activeTodos returns only active todos', () => {
      expect(store.activeTodos).toHaveLength(2)
    })

    it('activeCount returns the number of active todos', () => {
      expect(store.activeCount).toBe(2)
    })

    it('filteredTodos returns all todos when filter is "all"', () => {
      store.setFilter('all')
      expect(store.filteredTodos).toHaveLength(3)
    })

    it('filteredTodos returns only active when filter is "active"', () => {
      store.setFilter('active')
      expect(store.filteredTodos).toHaveLength(2)
    })

    it('filteredTodos returns only completed when filter is "completed"', () => {
      store.setFilter('completed')
      expect(store.filteredTodos).toHaveLength(1)
    })
  })
})
