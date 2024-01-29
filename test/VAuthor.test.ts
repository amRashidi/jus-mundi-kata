import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import Author from './../components/dls/Author.vue'

const defaultProps = {
  avatar: '',
  name: '',
  text: ''
}

const authorFactory = (props = {}) =>
  mount(Author, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Author>['$props']
  })

describe('render author correctly', () => {
  let wrapper: ReturnType<typeof authorFactory> | null = null
  beforeEach(() => {
    wrapper = authorFactory({
      avatar: 'avatar.png',
      name: 'Author',
      text: 'this test note'
    })
  })
  it('should render image correctly', () => {
    const image = wrapper?.find('img')
    expect(image).toBeTruthy()
    expect(image?.attributes('src')).toEqual('avatar.png')
    expect(image?.attributes('alt')).toEqual('Author')
  })
  it('should render paragraph correctly', () => {
    const paragraph = wrapper?.find('p')
    expect(paragraph).toBeTruthy()
    expect(paragraph?.element.textContent).toEqual('this test note')
  })
})
