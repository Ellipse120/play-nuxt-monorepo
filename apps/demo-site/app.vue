<script setup lang="ts">
const translation = useTranslation()
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <pre>
      {{ $t('welcome') }}
    </pre>
  </div>
</template>
