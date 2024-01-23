<!-- eslint-disable vue/no-v-html -->
<template>
  <i v-if="icon" :class="['v-icon', iconSize]" v-html="icon" />
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
watch(name, async (next) => {
  icon.value = next && (await $icons?.[next]?.())
}, { immediate: true, flush: 'sync' })
</script>

<style lang='scss'>
.v-icon {
  color: inherit;
  > svg {
    width: inherit;
    height: inherit;
  }
}
</style>
