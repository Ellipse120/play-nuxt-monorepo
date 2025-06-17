<script setup lang="ts">
import useTranslation from '../composables/useTranslation'
import { USelectMenu } from '#components'

const { locale, locales } = useTranslation()
</script>

<template>
  <USelectMenu
    v-model="locale"
    :items="locales"
    value-key="name"
    label-key="name"
    class="w-24"
  />
</template>

<style>

</style>
