<script setup lang="ts">
const translation = useTranslation()
</script>

<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <UCard>
      <template #header>
        <LanguageSwitcher />
      </template>

      <div>
        <div class="p-4 text-success bg-green-200/70 text-shadow-lg mask-radial-from-transparent mask-radial-from-15% mask-radial-to-black mask-radial-to-55% mask-radial-at-right p-2 rounded text-3xl">
          {{ $t('welcome') }}
        </div>
      </div>
    </UCard>
  </UApp>
</template>
