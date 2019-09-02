<template>
  <div class="minesweeper-main" ref="container">
    <div class="row-container" v-for="(row, row_index) in this.grid" :key="row_index">
      <div class="row">
        <cell
        v-for="(cell, cell_index) in row"
        @click="checkCell"
        :key="cell_index"
        :data="{
          cell,
          row_index,
          cell_index
        }" />
      </div>
    </div>
    <div v-if="!status">
      <button @click="startNewGame">Play Minesweeper</button>
    </div>
    <div v-if="status && status.includes('you')" class="dialog">
      You Lose!
      <button @click="startNewGame">Play Again</button>
    </div>
    <div class="footer">
      <!-- <button @click="reset">Stop</button> -->
      <router-link to="/">Go Home</router-link>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Cell from '@/components/Cell'

const CELL_SIZE = 25
const PLAYING = 'playing'
const LOSE = 'you lose'
const WIN = 'you win'

const GRID_EMPTY = ' '
const GRID_BOMB = '💣'

export default {
  name: 'game',
  data() {
    return {
      difficulty: 2,
      rows: null,
      cols: null,
      status: null,
      grid: null,
      matrix: null,
      total_checked: 0
    }
  },
  mounted() {
    window.reveal = this.revealRemainingBombs
    this.startNewGame()
  },
  computed: {
    is_final_cell() {
      return this.total_cells - this.total_bombs === this.total_checked
    },
    total_cells() {
      return this.rows * this.cols
    },
    total_bombs() {
      return this.matrix.reduce((acc, row) => {
        return acc + row.reduce((acc, col) => {
          return col ? acc + 1 : acc
        }, 0)
      }, 0)
    }
  },
  methods: {
    reset() {
      this.status = null
      this.grid = null
      this.matrix = null
    },
    async startNewGame() {
      this.rows = Math.floor((window.innerHeight - 75) / CELL_SIZE)
      this.cols = Math.floor(window.innerWidth / CELL_SIZE)
      this.grid = this.generateMatrix(this.rows, this.cols)
      this.matrix = this.generateBombMatrix(this.difficulty)
      this.total_checked = 0
      this.status = PLAYING
      await this.$nextTick()
      const { offsetLeft } = document.querySelector('.cell')
      this.$refs.container.style.marginTop = `${offsetLeft}px`
    },
    revealRemainingBombs() {
      this.grid = this.grid.map((row, row_index) => {
        return row.map((col, col_index) => {
          return this.matrix[row_index][col_index]
            ? GRID_BOMB
            : col
        })
      })
    },
    generateMatrix(rows, cols) {
      return [
        ...new Array(+rows).fill([
          ...new Array(+cols).fill(GRID_EMPTY)
        ])
      ]
    },
    generateBombMatrix(difficulty) {
      const dec = difficulty / 10
      const matrix = this.grid.map(row => {
        return row.map(item => {
          return Math.round(Math.random() <= dec) ? 1 : 0
        })
      })
      return matrix
    },
    setCell(row, col, value) {
      const current_row = [...this.grid[row]]
      current_row[col] = value
      this.total_checked++
      this.$set(this.grid, row, current_row)
    },
    checkCell({ row, col }) {
      const cell = this.getCell(row, col)
      if (this.status === LOSE || cell.current_value !== GRID_EMPTY) return
      this.setCell(row, col, cell.new_value)
      if (cell.bomb) {
        this.status = LOSE
        this.revealRemainingBombs()
        return this
      }
      if (this.is_final_cell) {
        this.status = WIN
        this.revealRemainingBombs()
        return this
      }
      if (!cell.new_value) {
        cell.surrounding_coords.map(point => {
          if (this.grid[point[0]][point[1]] === GRID_EMPTY) {
            this.checkCell({ row: point[0], col: point[1] })
          }
        })
      }
      return this
    },
    getCell(row, col) {
      const bomb = this.matrix[row][col]
      const current_value = this.grid[row][col]
      const surrounding_coords = this.getSurroundingCoords(row, col)
      const new_value = bomb
        ? GRID_BOMB
        : this.getSurroundingsCount(surrounding_coords)
      return {
        bomb,
        surrounding_coords,
        current_value,
        new_value
      }
    },
    getSurroundingCoords(row, col) {
      return ([
        [-1, +0],
        [-1, +1],
        [-0, +1],
        [+1, +1],
        [+1, +0],
        [+1, -1],
        [+0, -1],
        [-1, -1]
      ]).map(tuple => {
        return [tuple[0] + row, tuple[1] + col]
      }).filter(item => {
        return item[0] > -1
          && item[1] > -1
          && item[0] < this.matrix.length
          && item[1] < this.matrix[0].length
      })
    },
    getSurroundingsCount(coords) {
      const bombsCount = coords.reduce((acc, item) => {
        const spot = this.matrix[item[0]][item[1]]
        return acc + spot
      }, 0)
      return bombsCount
    }
  },
  components: {
    Cell
  }
}
</script>

<style lang="scss">
@import '~%/colors';

$cell-size: 25px;

.minesweeper-main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 6px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
  color: #2c3e50;
  z-index: 999999;

  button {
    border: 2px outset white;
    background: #eee;
    user-select: none;
    font-weight: 800;
    transition: none;

    &:focus {
      outline: none;
    }

    &:active {
      border-style: inset;
    }
  }

  .dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    max-width: 100%;
    padding: 30px;
    border: 2px outset #fff;
    background: #eee;
    font-weight: bold;

    button {
      margin-top: 20px;
    }
  }
}
pre {
  width: 200px;
  font-family: 'Courier New', Courier, monospace;
}
.row-container {
  display: block;

  .row {
    display: flex;
    justify-content: center;

    button {
      width: $cell-size;
      height: $cell-size;
    }
  }
}
.footer {
  position: fixed;
  bottom: 28px;
  right: 20px;

  a {
    background: $color-text-dark;
    color: $color-background-light;
    text-decoration: none;
  }
}
</style>
