<script setup lang="ts">
import useTranslation from '../composables/useTranslation'
import { UApp } from '#components'

const { locale, locales } = useTranslation()
</script>

<template>
  <UApp>
    <div class="text-red-500 text-3xl">
      123
    </div>

    <USelect
      v-model="locale"
      :items="locales"
      value-key="name"
      label-key="name"
      class="w-1/3"
    />
  </UApp>
</template>

<style>

</style>
