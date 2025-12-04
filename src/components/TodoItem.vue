<script setup>
defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete'])
</script>

<template>
  <li class="todo-item">
    <input
      type="checkbox"
      :id="`todo-${todo.id}`"
      :checked="todo.completed"
      @change="emit('toggle', todo.id)"
    />
    <label
      :for="`todo-${todo.id}`"
      :class="{ completed: todo.completed }"
    >
      {{ todo.text }}
    </label>
    <button @click="emit('delete', todo.id)">Delete</button>
  </li>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.todo-item label {
  flex: 1;
}

.todo-item label.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
