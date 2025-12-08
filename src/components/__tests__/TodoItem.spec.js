import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../TodoItem.vue'

describe('TodoItem', () => {
  const mockTodo = {
    id: 1,
    text: 'Learn Vue testing',
    completed: false
  }

  it('renders todo text', () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    expect(wrapper.text()).toContain('Learn Vue testing')
  })

  it('renders with completed styling when todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true }
    const wrapper = mount(TodoItem, {
      props: { todo: completedTodo }
    })

    const label = wrapper.find('label')
    expect(label.classes()).toContain('completed')
  })

  it('checkbox reflects completed status', () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    expect(checkbox.element.checked).toBe(false)
  })

  it('emits toggle event with id when checkbox changes', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.trigger('change')

    expect(wrapper.emitted('toggle')).toBeTruthy()
    expect(wrapper.emitted('toggle')[0]).toEqual([1])
  })

  it('emits delete event with id when delete button clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    const deleteButton = wrapper.find('button[aria-label="Delete"]')
    await deleteButton.trigger('click')

    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')[0]).toEqual([1])
  })

  it('shows edit input when edit button clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    const editButton = wrapper.find('button[aria-label="Edit"]')
    await editButton.trigger('click')

    const editInput = wrapper.find('input.edit-input')
    expect(editInput.exists()).toBe(true)
    expect(editInput.element.value).toBe('Learn Vue testing')
  })

  it('hides edit button when in edit mode', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    const editButton = wrapper.find('button[aria-label="Edit"]')
    await editButton.trigger('click')

    expect(wrapper.find('button[aria-label="Edit"]').exists()).toBe(false)
  })

  it('emits update event when Enter pressed in edit mode', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    // Enter edit mode
    await wrapper.find('button[aria-label="Edit"]').trigger('click')

    // Change text and press Enter
    const editInput = wrapper.find('input.edit-input')
    await editInput.setValue('Updated text')
    await editInput.trigger('keydown.enter')

    expect(wrapper.emitted('update')).toBeTruthy()
    expect(wrapper.emitted('update')[0]).toEqual([1, 'Updated text'])
  })

  it('exits edit mode without emitting when Escape pressed', async () => {
    const wrapper = mount(TodoItem, {
      props: { todo: mockTodo }
    })

    // Enter edit mode
    await wrapper.find('button[aria-label="Edit"]').trigger('click')

    // Press Escape
    const editInput = wrapper.find('input.edit-input')
    await editInput.trigger('keydown.escape')

    // Should exit edit mode
    expect(wrapper.find('input.edit-input').exists()).toBe(false)
    // Should NOT emit update
    expect(wrapper.emitted('update')).toBeFalsy()
  })
})
