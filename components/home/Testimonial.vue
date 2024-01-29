<template>
  <section class="p-8 max-w-[840px] mx-auto">
    <div class="py-8">
      <v-qoute>
        {{ qoute }}
      </v-qoute>
      <v-author v-bind="author" class="mt-4" />
      <div class="mt-4 text-center">
        <v-button variant="link" color="simple" size="sm" :to="link.to" dense>
          {{ link.text }}
        </v-button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { type LinkPart } from '@/types/parts'
interface Props {
  qoute: string;
  author: {
    avatar: string;
    name: string;
    text: string;
  };
  link: LinkPart;
}
defineProps<Props>()
</script>
