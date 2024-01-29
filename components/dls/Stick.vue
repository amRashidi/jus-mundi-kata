<template>
  <span :class="classes" />
</template>

<script setup lang="ts">
interface Props {
  mode?: 'h' | 'v' | 's'
}
const props = withDefaults(defineProps<Props>(), {
  mode: 'h'
})

const classes = computed(() => [
  'v-stick', `v-stick--${props.mode}`
])
</script>
