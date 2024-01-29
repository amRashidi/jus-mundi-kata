import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import Qoute from './../components/dls/Qoute.vue'

const cardFactory = () =>
  mount(Qoute, {
    slots: {
      default: () => 'TEST'
    }
  })

describe('render Qoute correctly', () => {
  let wrapper: ReturnType<typeof cardFactory> | null = null
  beforeEach(() => {
    wrapper = cardFactory()
  })
  it('should render raw Qoute correctly', () => {
    expect(wrapper?.vm).toBeTruthy()
    expect(wrapper?.classes()).toContain('v-qoute')
  })
  it('should render default slot correctly', () => {
    expect(wrapper?.find('.v-qoute__content').html()).toContain('TEST')
  })
})
