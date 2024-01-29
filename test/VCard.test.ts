import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import Card from './../components/dls/Card.vue'

const defaultProps = {
  variant: 'raw'
}

const cardFactory = (props = {}) =>
  mount(Card, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Card>['$props'],
    slots: {
      default: () => 'TEST'
    }
  })

describe('render Card correctly', () => {
  let wrapper: ReturnType<typeof cardFactory> | null = null
  beforeEach(() => {
    wrapper = cardFactory()
  })
  it('should render raw card correctly', () => {
    expect(wrapper?.vm).toBeTruthy()
    expect(wrapper?.classes()).toContain('v-card')
  })
  it('should render default slot correctly', () => {
    expect(wrapper?.html()).toContain('TEST')
  })
  it('should render raw card correctly', () => {
    wrapper?.setProps({ variant: 'mini' })
    expect(wrapper?.vm).toBeTruthy()
    expect(wrapper?.classes()).toContain('v-card')
  })
})
