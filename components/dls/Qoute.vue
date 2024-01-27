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
