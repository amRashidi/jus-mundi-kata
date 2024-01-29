<template>
  <section>
    <div class="container flex justify-between items-center h-full">
      <v-stick mode="h" />
      <h2 class="text-title-xxl">
        {{ title }}
      </h2>
      <v-stick mode="h" />
    </div>
    <p v-for="content,i in contents" :key="i" class="text-body-md max-w-[840px] mt-8 mx-auto text-center">
      {{ content }}
    </p>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  contents: string[]
}
defineProps<Props>()
</script>
