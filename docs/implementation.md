# Vue Todo - Step-by-Step Implementation

A learning-focused guide to building the Todo app. Each step introduces a Vue concept with links to official documentation.

---

## Phase 1: Foundation & Pinia Store

### Step 1.1: Clean Up Scaffold
- [x] Remove default Vue welcome components (HelloWorld, TheWelcome, icons)
- [x] Create a minimal App.vue with placeholder content
- [x] Verify the app runs with `npm run dev`

**Concepts:** Single File Components (SFC)
**Docs:** https://vuejs.org/guide/scaling-up/sfc.html

---

### Step 1.2: Apply 98.css Styling
- [x] Import 98.css in main.js
- [x] Create the Windows 98 window chrome structure in App.vue
- [x] Add title bar with window controls

**Concepts:** CSS integration, template structure
**Docs:** https://jdan.github.io/98.css/

---

### Step 1.3: Create Todo Store with Pinia
- [x] Create `src/stores/todo.js` with Pinia `defineStore()`
- [x] Add `todos` array as state
- [x] Add `addTodo` action
- [x] Add `deleteTodo` action

**Concepts:** Pinia stores, state, actions
**Docs:** https://pinia.vuejs.org/core-concepts/

---

### Step 1.4: Add Computed Getters
- [x] Add `completedTodos` getter
- [x] Add `activeTodos` getter
- [x] Add `activeCount` getter

**Concepts:** Pinia getters (like computed properties for stores)
**Docs:** https://pinia.vuejs.org/core-concepts/getters.html

---

### Step 1.5: Implement localStorage Persistence
- [x] Load todos from localStorage on store initialization
- [x] Use `watch()` to save todos on every change
- [x] Test persistence by refreshing the browser

**Concepts:** Pinia subscriptions, browser APIs
**Docs:** https://pinia.vuejs.org/core-concepts/state.html#subscribing-to-the-state

---

## Phase 2: Components & Reactivity

### Step 2.1: Create TodoInput Component
- [x] Create `src/components/TodoInput.vue`
- [x] Add text input with `ref()` for local state
- [x] Use `v-model` for two-way binding
- [x] Call store action on form submit

**Concepts:** `ref()`, `v-model`, component events
**Docs:** https://vuejs.org/guide/essentials/forms.html

---

### Step 2.2: Create TodoItem Component
- [x] Create `src/components/TodoItem.vue`
- [x] Accept `todo` as a prop with `defineProps()`
- [x] Display todo text with checkbox
- [x] Emit toggle and delete events

**Concepts:** Props, `defineProps()`
**Docs:** https://vuejs.org/guide/components/props.html

---

### Step 2.3: Create TodoList Component
- [x] Create `src/components/TodoList.vue`
- [x] Use `useTodoStore()` to access the Pinia store
- [x] Render todos with `v-for`
- [x] Add `:key` binding for list rendering

**Concepts:** `v-for`, list rendering, keys
**Docs:** https://vuejs.org/guide/essentials/list.html

---

### Step 2.4: Wire Up Components in App.vue
- [x] Import and use TodoInput component
- [x] Import and use TodoList component
- [x] Test adding todos through the UI

**Concepts:** Component composition
**Docs:** https://vuejs.org/guide/essentials/component-basics.html

---

### Step 2.5: Add Toggle Complete Functionality
- [x] Add `toggleTodo` action to the store
- [x] Emit event from TodoItem checkbox
- [x] Connect TodoList to handle the toggle

**Concepts:** Event handling, `$emit()`
**Docs:** https://vuejs.org/guide/components/events.html

---

### Step 2.6: Add Delete Functionality
- [x] Add delete button to TodoItem (98.css button)
- [x] Emit delete event with todo id
- [x] Connect to `deleteTodo` action in store

**Concepts:** Event handling with arguments
**Docs:** https://vuejs.org/guide/essentials/event-handling.html

---

## Phase 3: Filtering & Polish

### Step 3.1: Create TodoFilter Component
- [x] Create `src/components/TodoFilter.vue`
- [x] Add filter state to the store (`all`, `active`, `completed`)
- [x] Create three 98.css radio buttons

**Concepts:** Reactive state for UI
**Docs:** https://vuejs.org/guide/essentials/reactivity-fundamentals.html

---

### Step 3.2: Implement Filtered List
- [ ] Add `filteredTodos` getter to store
- [ ] Use `computed()` based on current filter
- [ ] Update TodoList to use filtered list

**Concepts:** `computed()` for derived state
**Docs:** https://vuejs.org/guide/essentials/computed.html

---

### Step 3.3: Add Edit Functionality
- [ ] Add edit mode state to TodoItem (local `ref()`)
- [ ] Show input field when editing
- [ ] Save edit with Enter key, cancel with Escape
- [ ] Add `updateTodo` action to store

**Concepts:** Conditional rendering, keyboard events
**Docs:** https://vuejs.org/guide/essentials/conditional.html

---

### Step 3.4: Add Clear Completed Button
- [ ] Add "Clear completed" button to TodoFilter
- [ ] Add `clearCompleted` action to store
- [ ] Only show button when completed todos exist

**Concepts:** Conditional display with `v-if`
**Docs:** https://vuejs.org/guide/essentials/conditional.html#v-if

---

### Step 3.5: Polish the UI
- [ ] Add todo count display ("3 items left")
- [ ] Add empty state message when no todos
- [ ] Fine-tune spacing and alignment

**Concepts:** Template expressions, conditional rendering
**Docs:** https://vuejs.org/guide/essentials/template-syntax.html

---

## Phase 4: Testing

### Step 4.1: Test Todo Store
- [ ] Create `src/stores/__tests__/todo.spec.js`
- [ ] Test `addTodo` action
- [ ] Test `deleteTodo` action
- [ ] Test `toggleTodo` action
- [ ] Test computed getters

**Concepts:** Unit testing with Vitest
**Docs:** https://pinia.vuejs.org/cookbook/testing.html

---

### Step 4.2: Test TodoItem Component
- [ ] Create `src/components/__tests__/TodoItem.spec.js`
- [ ] Test rendering todo text
- [ ] Test checkbox toggle emits event
- [ ] Test delete button emits event

**Concepts:** Component testing with Vue Test Utils
**Docs:** https://test-utils.vuejs.org/guide/

---

### Step 4.3: Test TodoInput Component
- [ ] Create `src/components/__tests__/TodoInput.spec.js`
- [ ] Test form submission
- [ ] Test input clearing after submit
- [ ] Test empty input prevention

**Concepts:** Testing user interactions
**Docs:** https://test-utils.vuejs.org/guide/essentials/event-handling.html

---

## Bonus: Advanced Concepts

### Bonus 1: Extract Composable
- [ ] Create `src/composables/useLocalStorage.js`
- [ ] Extract localStorage logic from store
- [ ] Make it reusable for other data

**Concepts:** Composables (reusable logic)
**Docs:** https://vuejs.org/guide/reusability/composables.html

---

### Bonus 2: Add Keyboard Shortcuts
- [ ] Focus input with `/` key
- [ ] Use `@keydown` event modifiers

**Concepts:** Event modifiers
**Docs:** https://vuejs.org/guide/essentials/event-handling.html#key-modifiers

---

## Progress Tracking

**Legend:**
- [ ] Not started
- [x] Completed

**Current Phase:** Phase 3 - Filtering & Polish
