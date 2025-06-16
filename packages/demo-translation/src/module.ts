import { readFileSync } from 'node:fs'
import { defineNuxtModule, addPlugin, createResolver, addImportsDir, hasNuxtModule, installModule, addComponentsDir } from '@nuxt/kit'

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
  messages: []
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'demo-translation',
    configKey: 'demoTranslation',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: 'en',
    locales: [],
  },
  async setup(_options, _nuxt) {
    if (!hasNuxtModule('@nuxt/ui')) {
      await installModule('@nuxt/ui')
    }

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

    _nuxt.options.css.push(resolver.resolve('./runtime/index.css'))

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addPlugin(resolver.resolve('./runtime/plugins/translate'))
    addImportsDir(resolver.resolve('./runtime/composables'))
    addComponentsDir({
      path: resolver.resolve('./runtime/components/'),
    })
  },
})
