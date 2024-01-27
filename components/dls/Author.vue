<template>
  <div class="v-author">
    <img :src="avatar" :alt="name" class="v-author__avatar" loading="lazy">
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
