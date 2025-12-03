<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()
const newTodoText = ref('')

function handleSubmit() {
  const text = newTodoText.value.trim()
  if (text) {
    todoStore.addTodo(text)
    newTodoText.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input
      v-model="newTodoText"
      type="text"
      placeholder="What needs to be done?"
    />
    <button type="submit">Add</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  gap: 4px;
}

input {
  flex: 1;
}
</style>
