import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Slider from './../components/dls/Slider.vue'

const defaultProps = {
  slides: []
}

const cardFactory = (props = {}, slide = '') =>
  mount(Slider, {
    props: {
      ...defaultProps,
      ...props
    } as InstanceType<typeof Slider>['$props'],
    slots: {
      slide
    }
  })

describe('render Slider correctly', () => {
  it('should render raw card correctly', () => {
    const wrapper = cardFactory()
    expect(wrapper?.vm).toBeTruthy()
  })
  it('should render raw card correctly', () => {
    const slides = new Array(6).fill('').map((_, i) => ({ title: `SLIDE_${i}` }))
    const wrapper = cardFactory({ slides }, `<template #slide="{slide}">
    {{ slide.title}}
    </template>
  `)
    expect(wrapper.find('.swiper-slide').html()).toMatchInlineSnapshot(`
      "<div class="swiper-slide">SLIDE_0
        <!---->
      </div>"
    `)
  })
})
