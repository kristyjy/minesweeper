<script setup>
import { ref, watch } from 'vue'
const emit = defineEmits(['change'])

const difficulty = ref('beginner')

watch(difficulty, () => emit('change', difficulty.value))
</script>

<template>
  <fieldset class="difficulty">
    <input
      v-model="difficulty" 
      type="radio"
      id="beginner"
      value="beginner"
    />
    <label class="difficulty-name" for="beginner">Beginner</label>

    <input
      v-model="difficulty"
      type="radio"
      id="intermediate"
      value="intermediate"
    />
    <label class="difficulty-name" for="intermediate">Intermediate</label>

    <input
      v-model="difficulty"
      type="radio"
      id="expert"
      value="expert"
    />
    <label class="difficulty-name" for="expert">Expert</label>
  </fieldset>
</template>

<style scoped>

.difficulty {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.difficulty-name {
  margin: 0 16px 0 4px;
}

</style>
