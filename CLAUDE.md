# Claude Instructions for Vue Todo Project

@docs/project-plan.md

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
