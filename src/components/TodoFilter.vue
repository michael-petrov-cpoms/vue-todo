<script setup>
import { useTodoStore } from '../stores/todo'

const store = useTodoStore()
</script>

<template>
  <fieldset class="todo-filter">
    <legend>Show:</legend>
    <div class="field-row">
      <input
        id="filter-all"
        type="radio"
        name="filter"
        value="all"
        :checked="store.filter === 'all'"
        @change="store.setFilter('all')"
      />
      <label for="filter-all">All</label>
    </div>
    <div class="field-row">
      <input
        id="filter-active"
        type="radio"
        name="filter"
        value="active"
        :checked="store.filter === 'active'"
        @change="store.setFilter('active')"
      />
      <label for="filter-active">Active</label>
    </div>
    <div class="field-row">
      <input
        id="filter-completed"
        type="radio"
        name="filter"
        value="completed"
        :checked="store.filter === 'completed'"
        @change="store.setFilter('completed')"
      />
      <label for="filter-completed">Completed</label>
    </div>
  </fieldset>
</template>

<style scoped>
.todo-filter {
  margin-top: 12px;
}

.todo-filter .field-row {
  display: inline-flex;
  margin-right: 12px;
}
</style>
