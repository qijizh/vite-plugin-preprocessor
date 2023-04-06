import type { Plugin } from 'vite'

export default function pluginFactory(): Plugin {
  return {
    name: 'vite-plugin-preprocessor',
  }
}
