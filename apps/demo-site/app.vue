<script setup lang="ts">
const translation = useTranslation()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
      <LanguageSwitcher />
      <pre class="text-success bg-pink-200 p-2 rounded">
        {{ $t('welcome') }}
      </pre>
  </div>
</template>
