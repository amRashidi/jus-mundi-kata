<template>
  <blockquote class="v-qoute">
    <div class="self-start flex-1">
      <v-icon name="quote-start" size="7" class="v-qoute__icon" />
    </div>
    <p class="v-qoute__content">
      <slot />
    </p>
    <div class="self-end flex-1">
      <v-icon name="quote-end" size="7" class="v-qoute__icon" />
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
    @apply text-primary-light;
  }
}
</style>
