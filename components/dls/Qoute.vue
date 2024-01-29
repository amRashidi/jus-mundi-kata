<template>
  <blockquote class="v-qoute">
    <div class="self-start">
      <v-icon name="quote-start" class="v-qoute__icon" />
    </div>
    <p class="v-qoute__content">
      <slot />
    </p>
    <div class="self-end">
      <v-icon name="quote-end" class="v-qoute__icon" />
    </div>
  </blockquote>
</template>

<style lang="postcss" scoped>
.v-qoute {
  @apply flex justify-center gap-8 items-center;
  &__content {
    @apply text-qoute max-w-[640px] italic;
    font-kerning: none;
    font-feature-settings: 'liga' off;
  }
  &__icon {
    @apply w-7 h-5 text-primary-light;
  }
}
</style>
