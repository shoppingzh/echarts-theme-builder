import { useDark } from "@vueuse/core"
import { defineStore } from "pinia"

export default defineStore('preference', () => {
  const darkMode = useDark({
    storageKey: 'darkMode',
  })

  return {
    darkMode,
  }
})
