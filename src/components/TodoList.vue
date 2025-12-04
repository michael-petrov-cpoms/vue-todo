<script setup>
import { useTodoStore } from '@/stores/todo'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()

function handleToggle(id) {
  // We need to add this action to the store — coming in Step 2.5
  const todo = todoStore.todos.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
  }
}

function handleDelete(id) {
  todoStore.deleteTodo(id)
}
</script>

<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todoStore.todos"
      :key="todo.id"
      :todo="todo"
      @toggle="handleToggle"
      @delete="handleDelete"
    />
  </ul>
  <p v-if="todoStore.todos.length === 0" class="empty-message">
    No todos yet. Add one above!
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
