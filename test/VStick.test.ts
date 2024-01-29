import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Stick from './../components/dls/Stick.vue'

const defaultProps = {
  mode: ''
}

const stickFactory = (props = {}) =>
  mount(Stick, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Stick>['$props'],
    slots: {
      default: () => 'TEST'
    }
  })

describe('render Stick correctly', () => {
  it('should render raw Stick correctly', () => {
    const wrapper = stickFactory()
    expect(wrapper?.vm).toBeTruthy()
    expect(wrapper?.classes()).toContain('v-stick')
  })
  const variants = ['h', 'v', 'v']
  it.each(variants)('should render variant %s', (mode) => {
    const wrapper = stickFactory({ mode })
    expect(wrapper.classes()).toContain(`v-stick--${mode}`)
  })
})
