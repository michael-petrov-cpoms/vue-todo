<script setup>
import { useTodoStore } from '@/stores/todo'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()

function handleToggle(id) {
  todoStore.toggleTodo(id)
}

function handleDelete(id) {
  todoStore.deleteTodo(id)
}

function handleUpdate(id, newText) {
  todoStore.updateTodo(id, newText)
}
</script>

<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todoStore.filteredTodos"
      :key="todo.id"
      :todo="todo"
      @toggle="handleToggle"
      @delete="handleDelete"
      @update="handleUpdate"
    />
  </ul>
  <p v-if="todoStore.todos.length === 0" class="empty-message">
    No todos yet. Add one above!
  </p>
  <p v-else-if="todoStore.filteredTodos.length === 0" class="empty-message">
    No {{ todoStore.filter }} todos.
  </p>
</template>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
  margin: 8px 0;
}

.empty-message {
  color: gray;
  font-style: italic;
  text-align: center;
  margin: 16px 0;
}
</style>
