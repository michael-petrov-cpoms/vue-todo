<script setup>
import TodoInput from './components/TodoInput.vue'
</script>

<template>
  <div class="container">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">Todo List</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        <TodoInput />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.window {
  width: 100%;
  max-width: 500px;
}
</style>
