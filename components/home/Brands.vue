<template>
  <section class="container pb-16">
    <div class="text-center text-body-sm uppercase text-gray-light">
      {{ title }}
    </div>
    <div class="grid grid-rows-2 grid-cols-6 gap-16 mt-16">
      <div v-for="brand in brands" :key="brand.name">
        <img :src="brand.image" :alt="brand.name" class="object-fit" loading="lazy">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  brands: {
    name: string;
    image: string;
  }[]
}
defineProps<Props>()
</script>
