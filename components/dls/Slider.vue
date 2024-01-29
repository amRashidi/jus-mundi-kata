<template>
  <Swiper
    centered-slides-bounds
    centered-slides
    center-insufficient-slides
    :slides-per-view="4.2"
    :space-between="24"
    :autoplay="{
      delay: 2500,
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
  slides: Array<Object>
}
defineProps<Props>()
</script>
