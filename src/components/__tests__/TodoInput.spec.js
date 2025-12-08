import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import TodoInput from '../TodoInput.vue'
import { useTodoStore } from '@/stores/todo'

// Mock localStorage
vi.stubGlobal('localStorage', {
  getItem: vi.fn(() => null),
  setItem: vi.fn(),
})

describe('TodoInput', () => {
  let wrapper
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useTodoStore()
    wrapper = mount(TodoInput)
  })

  it('renders input and button', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('has correct placeholder text', () => {
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('What needs to be done?')
  })

  it('adds todo to store on form submit', async () => {
    const input = wrapper.find('input')
    await input.setValue('New todo item')
    await wrapper.find('form').trigger('submit')

    expect(store.todos).toHaveLength(1)
    expect(store.todos[0].text).toBe('New todo item')
  })

  it('clears input after successful submit', async () => {
    const input = wrapper.find('input')
    await input.setValue('New todo item')
    await wrapper.find('form').trigger('submit')

    expect(input.element.value).toBe('')
  })

  it('does not add todo when input is empty', async () => {
    await wrapper.find('form').trigger('submit')

    expect(store.todos).toHaveLength(0)
  })

  it('does not add todo when input is only whitespace', async () => {
    const input = wrapper.find('input')
    await input.setValue('   ')
    await wrapper.find('form').trigger('submit')

    expect(store.todos).toHaveLength(0)
  })

  it('trims whitespace from todo text', async () => {
    const input = wrapper.find('input')
    await input.setValue('  Trimmed text  ')
    await wrapper.find('form').trigger('submit')

    expect(store.todos[0].text).toBe('Trimmed text')
  })
})
