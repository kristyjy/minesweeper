<script setup>
  import { onMounted } from 'vue'

  import Board from './components/Board/Board.vue'
  import Button from './components/elements/Button.vue'
  import Header from './components/Header/Header.vue'
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
  <Header />
  <main>
    <Board
      :board="game.board"
      :has-lost="game.hasLost"
      :has-won="game.hasWon"
      :reveal-all="game.hasLost || game.hasWon"
      @reveal="reveal"
      @toggleFlag="toggleFlag"
    />
    <div class="reset">
      <Button @click="game.generateBoard(game.totalMines)">Reset Game</Button>
    </div>
  </main>
</template>

<style scoped>
.reset {
  display: flex;
  justify-content: center;
}
</style>
