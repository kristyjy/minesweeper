<script setup>
import Cell from './Cell.vue'

defineProps({
  board: {
    type: Array,
    required: true,
  },
  rows: {
    type: Number,
    default: 9
  },
  cols: {
    type: Number,
    default: 9
  }
})
</script>

<template>
  <div class="grid-wrap">
    <div class="grid">
      <Cell
        v-for="cell in board"
        :key="cell.index"
        :cell="cell"
        @reveal="$emit('reveal', cell)"
        @toggleFlag="$emit('toggleFlag', cell)"
      />
    </div>
  </div>
</template>

<style scoped>
.grid-wrap {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.grid {
  background-color: var(--dark);
  border: 1px solid var(--dark);
  display: inline-grid;
  grid-template-columns: repeat(9, 50px);
  gap: 1px;
}
</style>
