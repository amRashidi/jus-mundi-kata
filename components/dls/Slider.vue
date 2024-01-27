<template>
  <Swiper
    :slides-per-view="4.2"
    :space-between="24"
    :autoplay="{
      delay: 5000,
    }"
    class="v-slider"
  >
    <SwiperSlide v-for="slide,i in slides" :key="i">
      <slot name="slide" v-bind="{slide}" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup lang="ts">
interface Props {
  slides: Array<unknown>
}
defineProps<Props>()
</script>
