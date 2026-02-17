<script setup>
  import { onMounted } from 'vue'

  import Board from './components/Board/Board.vue'
  import { useGameStore } from './stores/game'

  const game = useGameStore()

  function reveal(cell) {
    game.revealCell(cell)
  }

  function toggleFlag(cell) {
    game.toggleFlag(cell)
  }

  onMounted(() => {
    game.generateBoard(game.totalMines)
  })
</script>

<template>
  <main>
    <Board
      :board="game.board"
      @reveal="reveal"
      @toggleFlag="toggleFlag"
    />
  </main>
</template>

<style scoped>

</style>
