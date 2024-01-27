<template>
  <v-card class="text-block">
    <img class="text-block__image" :src="image" :alt="title">
    <h5 class="text-block__title">
      {{ title }}
    </h5>
    <p class="text-block__desc">
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
.text-block {
  @apply py-8 text-center;
  &__image {
    @apply w-12 h-12 mx-auto;
  }
  &__title {
    @apply text-title-xs mt-4;
  }
  &__desc {
    @apply text-body-md mt-2 mb-0;
  }
}
</style>
