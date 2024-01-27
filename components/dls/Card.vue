<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'raw' | 'mini'
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'raw'
})

const classes = computed(() => ({
  'v-card': true,
  'v-card--mini': props.variant === 'mini'
}))
</script>
