<script setup>
import IconFlag from '@/components/icons/IconFlag.vue'
import IconMine from '@/components/icons/IconMine.vue'
import CellButton from './CellButton.vue'

defineProps({
  cell: {
    type: Object,
    required: true,
  },
  revealAll: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['cell', {oops: cell.isRevealed && cell.isMine}]">
    <template v-if="cell.isRevealed || revealAll">
      <IconMine
        v-if="cell.isMine"
        class="icon-mine"
      />
      <span v-else-if="cell.adjacentMines" :class="`number number-${cell.adjacentMines}`">
        {{ cell.adjacentMines }}
      </span>
    </template>
    <template v-else>
      <CellButton
        @leftClick="$emit('reveal', cell)"
        @rightClick="$emit('toggleFlag', cell)"
      >
        <IconFlag
          v-if="cell.isFlagged"
          class="icon-flag"
        />
      </CellButton>
    </template>
  </div>
</template>

<style scoped>
.cell {
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: var(--light-grey);
  height: 50px;
  position: relative;
  font-size: 2rem;
}

.cell.oops {
  background-color: var(--vibrant-coral);
}

.number {
  color: var(--color-5);
  font-weight: bold;
}

.number-1 {
  color: var(--color-1);
}

.number-2 {
  color: var(--color-2);
}

.number-3 {
  color: var(--color-3);
}

.number-4 {
  color: var(--color-4);
}

.icon-mine {
  width: 40px;
}

.icon-flag {
  width: 26px;
}

</style>
