<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'delete', 'update'])

// Local state for edit mode
const isEditing = ref(false)
const editText = ref('')
const editInput = ref(null)

function startEdit() {
  isEditing.value = true
  editText.value = props.todo.text
  // Focus the input after Vue updates the DOM
  nextTick(() => {
    editInput.value?.focus()
  })
}

function saveEdit() {
  if (!isEditing.value) return // Already cancelled, don't save
  const trimmed = editText.value.trim()
  if (trimmed) {
    emit('update', props.todo.id, trimmed)
  }
  isEditing.value = false
}

function cancelEdit() {
  isEditing.value = false
}
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
      v-if="!isEditing"
      :for="`todo-${todo.id}`"
      :class="{ completed: todo.completed }"
    >
      {{ todo.text }}
    </label>
    <input
      v-else
      ref="editInput"
      v-model="editText"
      class="edit-input"
      @keydown.enter="saveEdit"
      @keydown.escape="cancelEdit"
      @blur="saveEdit"
    />
    <button v-if="!isEditing" @click="startEdit" aria-label="Edit">✎</button>
    <button @click="emit('delete', todo.id)" aria-label="Delete">✕</button>
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

.edit-input {
  flex: 1;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.todo-item button {
  font-weight: bold;
  font-size: 14px;
}
</style>
