import { readFileSync } from 'node:fs'
import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'

export type LocaleOption = {
  name: string
  file: string
}
export type Messages = {
  [key: string]: string
}

// Module options TypeScript interface definition
export interface ModuleOptions {
  defaultLocale: string
  locales: LocaleOption[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'demo-translation',
    configKey: 'demoTranslation',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: 'en',
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)
    const localesResolver = createResolver(_nuxt.options.srcDir)
    const messages: Messages = {}

    for (const locale of _options.locales ?? []) {
      const filePath = localesResolver.resolve(locale.file)
      const fileContents = await readFileSync(filePath, 'utf-8')
      const _messages = JSON.parse(fileContents)
      messages[locale.name] = _messages
    }

    _nuxt.options.runtimeConfig.public.translation = {
      ..._options,
      messages,
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
