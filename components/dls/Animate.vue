<template>
  <div ref="target">
    <transition :name="animation">
      <div v-if="animate" class="v-animate">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">

interface Props {
  animation: string;
  delay: number;
}
const props = withDefaults(defineProps<Props>(), {
  animation: 'fade',
  delay: 0
})
const target = ref()
const animate = ref(false)
const observer = new IntersectionObserver(
  ([entry]) => {
    animate.value = entry.isIntersecting
  },
  {
    threshold: 0.5
  }
)
watch(animate, (next) => {
  next && observer.disconnect()
})
onMounted(() => {
  setTimeout(() => {
    observer.observe(target.value)
  }, props.delay)
})
onUnmounted(() => {
  observer.disconnect()
})
</script>

<style scoped lang="postcss">
.v-animate {
  animation-delay: v-bind(delay);
  transition-duration: 750ms;
}
.fade {
  &-enter-active,
  &-leave-active  {
    opacity: 1;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
.circle {
  &-enter-active,
  &-leave-active  {
    transform: scale(1);
  }
  &-enter-from,
  &-leave-to {
    transform: scale(0);
  }
}
.slideleft {
  &-enter-active,
  &-leave-active  {
   transform: translateX(0%);
    opacity: 1;
  }
  &-enter-from,
  &-leave-to {
   transform: translateX(-50%);
    opacity: 0;
  }
}
.slidright {
  &-enter-active,
  &-leave-active  {
   transform: translateX(0%);
    opacity: 1;
  }
  &-enter-from,
  &-leave-to {
   transform: translateX(50%);
    opacity: 0;
  }
}
.slideup {
  &-enter-active,
  &-leave-active  {
    transform: translateY(0);
    opacity: 1;
  }
  &-enter-from,
  &-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
}
</style>
