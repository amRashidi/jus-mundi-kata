<template>
  <div class="v-author">
    <img :src="avatar" :alt="name" class="v-author__avatar">
    <p class="v-author__content" v-html="text" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  avatar: string;
  name: string;
  text: string;
}
defineProps<Props>()
</script>

<style lang="postcss">
.v-author {
  @apply flex gap-8 justify-center;
  &__avatar {
    @apply w-12 h-12 rounded-full;
  }
  &__content {
    @apply text-body-md text-center flex-1;
  }
}
</style>
