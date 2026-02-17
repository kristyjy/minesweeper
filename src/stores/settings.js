
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const difficulty = ref('beginner')
  const width = computed(() => {
    switch(difficulty.value) {
      case 'beginner':
        return 9
      case 'intermediate':
        return 16
    }
    return 30
  })
  const height = computed(() => {
    if (difficulty.value === 'beginner') return 9
    return 16
  })
  const totalMines = computed(() => {
    switch(difficulty.value) {
      case 'beginner':
        return 10
      case 'intermediate':
        return 40
    }
    return 99
  })


  function setDifficulty(d) {
    difficulty.value = d
  }

  return { difficulty, width, height, totalMines, setDifficulty }
})
