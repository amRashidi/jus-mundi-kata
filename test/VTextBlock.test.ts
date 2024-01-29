import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import TextBlock from './../components/dls/TextBlock.vue'

const defaultProps = {
  image: '',
  title: '',
  description: ''
}

const cardFactory = (props = {}) =>
  mount(TextBlock, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof TextBlock>['$props'],
    slots: {
      default: () => 'TEST'
    }
  })

describe('render text-block correctly', () => {
  let wrapper: ReturnType<typeof cardFactory> | null = null
  beforeEach(() => {
    wrapper = cardFactory()
  })
  it('should render text-block correctly', () => {
    expect(wrapper?.vm).toBeTruthy()
  })
  it('should render text-block elements correctly', async () => {
    await wrapper?.setProps({ image: 'image', title: 'title', description: 'description' })
    expect(wrapper?.find('.v-text-block__image').attributes('src')).toBe('image')
    expect(wrapper?.find('.v-text-block__image').attributes('alt')).toBe('title')
    expect(wrapper?.find('.v-text-block__title').text()).toEqual('title')
    expect(wrapper?.find('.v-text-block__desc').text()).toEqual('description')
    expect(wrapper?.classes()).toContain('v-text-block')
  })
})
