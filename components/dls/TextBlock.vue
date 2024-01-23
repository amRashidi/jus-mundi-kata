<template>
  <v-card class="text-block">
    <img class="text-block____image" :src="image" :alt="title">
    <h5 class="text-block____title">
      {{ title }}
    </h5>
    <p class="text-block____desc">
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
  &__image {
    @apply w-10 h-10;
  }
  &__title {
    @apply text-title-xs mt-4;
  }
  &__desc {
    @apply text-body-md mt-2 mb-0;
  }
}
</style>
