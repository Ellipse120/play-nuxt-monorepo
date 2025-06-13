<script setup lang="ts">
const config = useRuntimeConfig()
const translation = config.public.translation
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    {{ translation }} 123 {{config}}
  </div>
</template>
