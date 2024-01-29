<template>
  <component :is="component" v-bind="attributes">
    <v-icon v-if="icon" :name="icon" />
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { RouteLocationRaw } from '#vue-router'
import type IconList from '~/assets/icons'

interface IProps {
  variant: 'main' | 'link';
  color: 'primary' | 'secondary' | 'simple';
  size?: 'sm' | 'nl' | 'md',
  disabled?: boolean;
  dense?: boolean;
  to?: RouteLocationRaw | null;
  icon?: keyof typeof IconList | null;
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'main',
  color: 'primary',
  size: 'nl',
  dense: false,
  disabled: false,
  to: null,
  icon: null
})

const component = computed(() => props.to ? defineNuxtLink({}) : 'button')

const classes = computed(() => ([
  'v-btn',
  `v-btn__${props.size}`,
  `v-btn__${props.variant}`,
  `v-btn__${props.color}`, {
    'v-btn--disabled': props.disabled,
    'v-btn--dense': props.dense
  }
]))

const attributes = computed(() => ({
  role: props.to ? 'link' : 'button',
  disabled: props.disabled || undefined,
  to: props.to,
  class: classes.value
}))
</script>
