<template>
  <section class="container grid grid-cols-3 gap-8">
    <v-text-block
      v-for="item in items"
      :key="item.title"
      :image="item.image"
      :description="item.description"
      :title="item.title"
    />
  </section>
</template>
<script setup lang="ts">
interface Props {
  items: {
    image: string;
    title: string;
    description: string;
  }[]
}
defineProps<Props>()
</script>
