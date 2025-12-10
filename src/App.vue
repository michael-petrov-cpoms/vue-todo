<script setup>
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilter from './components/TodoFilter.vue'

// Window state: 'normal', 'maximized', 'minimized', 'closed'
const windowState = ref('normal')

function handleMinimize() {
  windowState.value = windowState.value === 'minimized' ? 'normal' : 'minimized'
}

function handleMaximize() {
  windowState.value = windowState.value === 'maximized' ? 'normal' : 'maximized'
}

function handleClose() {
  windowState.value = windowState.value === 'closed' ? 'normal' : 'closed'
}
</script>

<template>
  <div class="container" :class="windowState">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">Todo List</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" @click="handleMinimize"></button>
          <button aria-label="Maximize" @click="handleMaximize"></button>
          <button aria-label="Close" @click="handleClose"></button>
        </div>
      </div>
      <div class="window-body">
        <div v-if="windowState === 'closed'" class="closed-message">
          There's always something to do 😉
          <button @click="handleClose">Reopen</button>
        </div>
        <template v-else>
          <TodoInput />
          <TodoFilter />
          <TodoList />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 2rem;
  transition: all 0.3s ease;
}

.window {
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s ease;
}

/* Maximized: scale up 2x */
.container.maximized .window {
  transform: scale(2);
  transform-origin: top center;
}

/* Minimized: small and bottom-left */
.container.minimized {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  top: auto;
  padding: 0;
  justify-content: flex-start;
}

.container.minimized .window {
  transform: scale(0.5);
  transform-origin: bottom left;
  max-width: 300px;
}

/* Closed message styling */
.closed-message {
  text-align: center;
  padding: 2rem;
  color: #222;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}
</style>
