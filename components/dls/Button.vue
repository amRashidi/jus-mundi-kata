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
  size: 'sm' | 'nl' | 'md',
  to?: RouteLocationRaw | null;
  icon?: keyof typeof IconList | null;
}

const props = withDefaults(defineProps<IProps>(), {
  variant: 'main',
  color: 'primary',
  size: 'nl',
  to: null,
  icon: null
})

const component = computed(() => props.to ? defineNuxtLink({}) : 'button')

const classes = computed(() => ([
  'v-btn',
  `v-btn__${props.size}`,
  `v-btn__${props.variant}`,
  `v-btn__${props.color}`
]))

const attributes = computed(() => ({
  role: props.to ? 'link' : 'button',
  to: props.to,
  class: classes.value
}))
</script>

<style lang="scss">

.v-btn {
  @apply inline-flex items-center gap-4 uppercase;
  &__md {
    @apply px-8 py-5;
  }
  &__nl {
    @apply p-4;
  }
  &__sm {
    @apply p-2;
  }
  &__main {
    @apply rounded shadow-cta text-cta-bold;
  }
  &__link {
    @apply underline;
  }
  &__primary {
    @apply bg-primary-light text-white;

  }
  &__secondary {
    @apply bg-white text-black-light;
  }
}

</style>
