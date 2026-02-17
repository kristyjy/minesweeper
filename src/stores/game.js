
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  const board = ref([])
  const totalFlagged = computed(() => board.value.filter((c) => c.isFlagged).length)
  const hasLost = computed(() => board.value.filter((c) => c.isRevealed && c.isMine).length !== 0)
  const hasWon = computed(() => board.value.filter((c) => !c.isRevealed).length === 0)

  // Settings
  const difficulty = ref('beginner')
  const rows = computed(() => {
    switch(difficulty.value) {
      case 'beginner':
        return 9
      case 'intermediate':
        return 16
    }
    return 30
  })
  const cols = computed(() => {
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

  function getAdjacentIndexes(cell) {
    // Neighbor offsets (row/col directions)
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ]
    const { row, col } = cell
    const adjacentCells = []

    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc

      if (
        newRow >= 0 &&
        newRow < rows.value &&
        newCol >= 0 &&
        newCol < cols.value
      ) {
        adjacentCells.push(newRow * cols.value + newCol)
      }
    }
    return adjacentCells
  }

  function generateBoard() {
    const totalCells = rows.value * cols.value

    if (totalMines.value > totalCells) {
      throw new Error("Mine count exceeds total number of cells.")
    }

    // Create empty board
    const tempBoard = Array.from({ length: totalCells }, (_, index) => ({
      index,
      row: Math.floor(index / cols.value),
      col: index % cols.value,
      isMine: false,
      isRevealed: false,
      isFlagged: false,
      adjacentMines: 0
    }))

    // Randomly place mines
    let minesPlaced = 0;
    while (minesPlaced < totalMines.value) {
      const randomIndex = Math.floor(Math.random() * totalCells)

      if (!tempBoard[randomIndex].isMine) {
        tempBoard[randomIndex].isMine = true
        minesPlaced++
      }
    }

    // Calculate adjacent mines
    for (let i = 0; i < totalCells; i++) {
      if (tempBoard[i].isMine) continue

      const adjacentIndexes = getAdjacentIndexes(tempBoard[i])
      let count = 0

      adjacentIndexes.forEach((index) => {
        if (tempBoard[index].isMine) {
          count++
        }
      })

      tempBoard[i].adjacentMines = count
    }

    board.value = tempBoard
  }

  function revealCell(cell) {
    if (!cell.isRevealed) {
      board.value[cell.index].isRevealed = true
      if (!cell.adjacentMines) {
        const adjacentCells = getAdjacentIndexes(cell)
        for (let i = 0; i < adjacentCells.length; i++) {
          revealCell(board.value[adjacentCells[i]])
        }
      }
    }
  }

  function setDifficulty(d) {
    difficulty.value = d
  }

  function toggleFlag(cell) {
    board.value[cell.index].isFlagged = !board.value[cell.index].isFlagged
  }


  return {
    board,
    cols,
    hasLost,
    hasWon,
    rows,
    totalFlagged,
    totalMines,
    generateBoard,
    revealCell,
    setDifficulty,
    toggleFlag
  }
})
