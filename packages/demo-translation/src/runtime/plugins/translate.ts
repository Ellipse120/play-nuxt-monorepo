import useTranslation from '../composables/useTranslation'
import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(async () => {
  const { messages } = useTranslation()

  const t = (key: string) => messages.value[key] || key

  return {
    provide: {
      t,
    },
  }
})
