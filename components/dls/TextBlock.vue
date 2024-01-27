<template>
  <v-card class="v-text-block">
    <img class="v-text-block__image" :src="image" :alt="title" loading="lazy">
    <h5 class="v-text-block__title">
      {{ title }}
    </h5>
    <p class="v-text-block__desc">
      {{ description }}
    </p>
  </v-card>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  description: string;
}
defineProps<Props>()

</script>

<style lang="postcss" scoped>

</style>
