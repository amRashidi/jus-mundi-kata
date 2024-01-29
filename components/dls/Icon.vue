<template>
  <component :is="component" />
</template>

<script setup lang='ts'>
import IconList from '@/assets/icons'
interface IProps {
  name: keyof typeof IconList;
  size?: string | number;
}
const props = defineProps<IProps>()
const name = toRef(props, 'name')
const { $icons } = useNuxtApp()
const iconSize = computed(() => `w-${props.size || '4'} h-${props.size || '4'}`)
const icon = ref('')
const component = computed(() => {
  if (!props.name) { return null }
  return h('i', {
    class: ['v-icon', iconSize.value],
    innerHTML: icon.value
  })
})
watch(name, async (next) => {
  icon.value = next && (await $icons?.[next]?.())
}, { immediate: true, flush: 'sync' })
</script>
