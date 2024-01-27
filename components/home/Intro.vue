<template>
  <section class="intro">
    <div class="intro__main">
      <div class="intro__parts">
        <div class="intro__case" />
        <HomePartsICC class="intro__icc" />
        <HomePartsLogo />
      </div>
      <div class="intro__texts">
        <h1 class="text-title-xxl">
          {{ title }}
        </h1>
        <p class="text-body-lg mt-8">
          {{ subtitle }}
        </p>
        <v-button
          variant="main"
          color="primary"
          size="md"
          icon="chev-right"
          :to="link.to"
          class="mt-24"
        >
          {{ link.text }}
        </v-button>
      </div>
    </div>
    <div class="intro__footer">
      <div class="intro__footer__block">
        <v-stick mode="v" />
        <v-stick mode="s" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { LinkPart } from '~/types/parts'

interface Props {
  title: string;
  subtitle: string;
  link: LinkPart;
}
defineProps<Props>()
</script>
<style lang="postcss" scopped>
.intro {
  @apply h-[800px] flex flex-col justify-between;
  &__main {
    @apply container  grid grid-cols-2;
  }
  &__parts {
    @apply col-span-1 mt-11 relative;
  }
  &__texts {
    @apply col-span-1 mt-[175px];
  }
  &__icc {
    @apply w-[500px] h-[500px] bg-white rounded-full absolute flex justify-center items-center shadow-cta;
  }
  &__mask {
    @apply top-[60%] left-[0%] w-[430px] absolute opacity-50;
  }
  &__box {
    @apply top-[87%] left-[20%] absolute;
  }
  &__case {
    @apply top-[30%] left-[10%] absolute w-[480px] h-[480px] bg-[url(@/assets/images/case_bg.gif)] bg-contain;
  }
  &__footer {
    @apply h-[120px] bottom-0 w-full;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #F5F5F5 69.79%);
    &__block {
      @apply container flex justify-between items-center h-full
    }
  }
}
</style>
