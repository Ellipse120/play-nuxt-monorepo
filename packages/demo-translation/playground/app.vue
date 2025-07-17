<template>
  <div>
    <LanguageSwitcher />
    <div>{{ $t('welcome') }}</div>
    Nuxt module playground! {{ translation }}
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const translation = config.public.translation
</script>
