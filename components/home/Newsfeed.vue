<template>
  <section class="bg-gray-dark text-center py-8">
    <div class="text-cta-main uppercase mb-4">
      {{ slogan }}
    </div>
    <h2 class="text-title-xl">
      {{ title }}
    </h2>
    <ClientOnly>
      <v-animate ckey="slides" animation="slideleft" :delay="100">
        <v-slider :slides="items" class="mt-4 px-16">
          <template #slide="{slide}">
            <v-card variant="mini" class="h-32 rounded-lg shadow-slide text-start">
              <div class="text-primary-light text-body-semi">
                {{ slide.title }}
              </div>
              <v-button variant="link" color="simple" dense :to="slide.link" class="mt-2">
                Read more
              </v-button>
            </v-card>
          </template>
        </v-slider>
      </v-animate>
    </ClientOnly>
    <v-button variant="link" color="simple" size="nl" :to="link.to" dense>
      {{ link.text }}
      read all news
    </v-button>
  </section>
</template>
<script setup lang="ts">
interface Props {
  slogan: string;
  title: string;
  link: {
    text: string;
    to: string;
  };
  items: {
    title: string;
    link: string;
  }[]
}
defineProps<Props>()
</script>
