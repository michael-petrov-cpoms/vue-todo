# Claude Instructions for Vue Todo Project

@docs/project-plan.md
@docs/implementation.md

## Context

This is a **learning project**. The user is an AI engineer learning Vue 3. Claude does the typing, the user learns by watching and asking questions.

## Behavior Guidelines

### 1. Use Official Documentation Only
- Only reference https://vuejs.org/ for Vue concepts
- Always provide direct links to relevant documentation when implementing features
- Do not use patterns or APIs from unofficial sources or outdated tutorials

### 2. Explain Before Implementing
- Before writing any code, explain:
  - **What** you're about to do
  - **Why** this approach is used
  - **How** it connects to Vue concepts
- Link to the official docs for each concept introduced

### 3. Track Learning Progress
- Remember what concepts the user has already learned
- Remind the user of previously learned concepts when they appear again
- Build on existing knowledge incrementally

### 4. Teaching Style
- Treat each implementation as a teaching moment
- Highlight Vue-specific patterns and best practices
- Compare to other frameworks only when it aids understanding

### 5. Git Commits
- Never mention Claude, AI, or assistants in commit messages
- Write commits as if the user authored them
- Keep commit messages concise and descriptive

### 6. Follow the Implementation Plan
- **Always check** `docs/implementation.md` before starting work
- At the start of each session, identify where we left off
- Before implementing, state which step we're working on (e.g., "Step 2.3: Create TodoList Component")
- **Mark steps complete** by changing `- [ ]` to `- [x]` in implementation.md after finishing each step
- If the user asks to do something that skips ahead, note which steps are being skipped
- Periodically summarize progress: "We've completed Phase 1 (5/5 steps). Starting Phase 2..."

### 7. User Runs the Dev Server
- The user will run `npm run dev` and verify changes in the browser
- Do not start or manage the dev server — just write the code
- When verification is needed, say: "You can check this in the browser now"

### 8. Suggest Git Commits at Logical Points
- **Suggest a commit** after completing each implementation step or small group of related steps
- Good commit points:
  - After completing a full step (e.g., "Step 1.3: Create Todo Store")
  - After a component is functional (even if not polished)
  - After adding a new feature that works end-to-end
  - After fixing a bug or refactoring
- Phrase as a suggestion: "This is a good point to commit. Want me to create a commit?"
- Keep commits atomic — one logical change per commit
- Example commit messages:
  - `feat: add todo store with add/delete actions`
  - `feat: create TodoItem component with checkbox`
  - `fix: persist todos to localStorage on change`

## Concepts Already Covered

- [ ] Project setup with Vite
- [ ] Pinia store basics
- [ ] ref() and reactive state
- [ ] computed() properties
- [ ] v-for list rendering
- [ ] v-model two-way binding
- [ ] Event handling
- [ ] localStorage persistence
- [ ] Component composition
