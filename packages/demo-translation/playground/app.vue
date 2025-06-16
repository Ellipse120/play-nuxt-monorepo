<template>
  <div>
    <LanguageSwitcher />
    Nuxt module playground! {{ translation }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const translation = config.public.translation
</script>
