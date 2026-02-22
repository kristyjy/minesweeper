<script setup>
import Cell from './Cell.vue'
import WinLoseAlert from './WinLoseAlert.vue'

defineProps({
  board: {
    type: Array,
    required: true,
  },
  difficulty: {
    type: String,
    default: 'beginner'
  },
  hasLost: {
    type: Boolean,
    default: false
  },
  hasWon: {
    type: Boolean,
    default: false
  },
  revealAll: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="grid-container">
    <div class="grid-wrap">
      <div :class="['grid', difficulty]">
        <Cell
          v-for="cell in board"
          :key="cell.index"
          :cell="cell"
          :reveal-all="revealAll"
          @reveal="$emit('reveal', cell)"
          @toggleFlag="$emit('toggleFlag', cell)"
        />
      </div>
      <WinLoseAlert
        v-if="hasWon || hasLost"
        :win="hasWon"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.grid-wrap {
  position: relative;
}

.grid {
  background-color: var(--dark);
  border: 1px solid var(--dark);
  display: inline-grid;
  grid-template-columns: repeat(9, 50px);
  gap: 1px;
}

.intermediate {
  grid-template-columns: repeat(16, 50px);
}

.expert {
  grid-template-columns: repeat(30, 50px);
}
</style>
