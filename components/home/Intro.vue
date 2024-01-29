<template>
  <section class="intro">
    <div class="intro__main">
      <ClientOnly>
        <div class="intro__parts">
          <v-animate ckey="icc" animation="circle">
            <HomePartsICC class="intro__icc" />
          </v-animate>
          <v-animate ckey="logo" animation="slideleft" :delay="1000">
            <HomePartsLogo />
          </v-animate>
          <v-animate ckey="mask" animation="fade" :delay="1500" class="intro__case" />
        </div>
        <div class="intro__texts">
          <v-animate ckey="title" animation="slideup" :delay="1500">
            <h1 class="text-title-xxl">
              {{ title }}
            </h1>
          </v-animate>
          <v-animate ckey="subtitle" animation="slideup" :delay="2500">
            <p class="text-body-lg mt-8">
              {{ subtitle }}
            </p>
          </v-animate>
          <v-animate ckey="button" animation="slideup" :delay="3000">
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
          </v-animate>
        </div>
      </ClientOnly>
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
  @apply min-h-[800px] h-[800px] flex flex-col justify-between;
  &__main {
    @apply container grid grid-cols-2;
  }
  &__parts {
    @apply col-span-1 mt-11 relative;
  }
  &__case {
    > .v-animate {
      @apply absolute top-0 bottom-0 left-0 right-0 bg-[url(@/assets/images/case_bg.gif)] bg-contain bg-no-repeat bg-bottom -z-10;
    }
  }
  &__texts {
    @apply col-span-1 mt-[175px];
  }
  &__icc {
    @apply w-[500px] h-[500px] bg-white rounded-full flex justify-center items-center shadow-cta;
  }
  &__box {
    @apply h-full w-full flex justify-center items-start;
  }
  &__logo {
    @apply w-48 h-48 flex justify-center items-center rounded-full -translate-x-[50%] -translate-y-[20%];
    background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(255,255,255,1) 100%);
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
