import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Button from './../components/dls/Button.vue'

const defaultProps = {
  variant: 'main',
  color: 'primary',
  size: 'nl'
}

const btnFactory = (props = {}) =>
  mount(Button, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Button>['$props'],
    slots: {
      default: () => 'TEST'
    }
  })

describe('render as button', () => {
  it('should not have link attrs', () => {
    const button = btnFactory()
    expect(button.attributes('href')).toBeFalsy()
    expect(button.attributes('rel')).toBeFalsy()
    expect(button.attributes('target')).toBeFalsy()
  })
})

describe('render as an anchor tag', () => {
  it('should render external link correctly', () => {
    const href = 'http://jusmundi.com'
    const link = btnFactory({ to: href })
    expect(link.attributes('href')).toBe(href)
    expect(link.attributes('role')).toBe('link')
    expect(link.attributes('rel')).toBe('noopener noreferrer')
  })

  it('should internal link correctly', () => {
    const href = '/'
    const link = btnFactory({ to: href })

    expect(link.attributes('href')).toBe(href)
    expect(link.attributes('role')).toBe('link')
  })
})

const variants = [['main'], ['link']]
const colors = [['primary'], ['secondary'], ['simple']]
const sizes = [['sm'], ['nl'], ['md']]

describe('styles', () => {
  it.each(sizes)('should render size %s', (size) => {
    const button = btnFactory({ size })
    expect(button.classes()).toContain(`v-btn__${size}`)
  })

  it.each(variants)('should render variant %s', (variant) => {
    const button = btnFactory({ variant })
    expect(button.classes()).toContain(`v-btn__${variant}`)
  })

  it.each(colors)('should render color %s', (color) => {
    const button = btnFactory({ color })
    expect(button.classes()).toContain(`v-btn__${color}`)
  }
  )

  it('should render correctly with disabled attr', () => {
    const button = btnFactory({ disabled: true })
    expect(button.classes()).toContain('v-btn--disabled')
    expect(button.attributes()).toContain('disabled')
  })

  it('should render correctly with dense style', () => {
    const button = btnFactory({ dense: true })
    expect(button.classes()).toContain('v-btn--dense')
  })
})
