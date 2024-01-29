import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import Animate from './../components/dls/Animate.vue'

const defaultProps = {
  animation: ''
}

const authorFactory = (props = {}) =>
  mount(Animate, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Animate>['$props'],
    slot: () => 'TEST'
  })

describe('render Animate correctly', () => {
  let wrapper: ReturnType<typeof authorFactory> | null = null
  beforeEach(() => {
    wrapper = authorFactory({
      animation: 'fade',
      delay: 1000
    })
  })
  it('should render component correctly', () => {
    expect(wrapper?.vm).toBeTruthy()
    expect(wrapper?.find('.v-animte').exists()).toBe(false)
    setTimeout(() => {
      expect(wrapper?.find('.v-animte').text()).toEqual('TEST')
    }, 1000)
  })
})
