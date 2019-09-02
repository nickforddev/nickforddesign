<template>
  <div class="cell">
    <button
      class="cell-btn"
      :class="cellClass"
      @click.right.prevent="toggleFlag"
      @click="emitClick"
    >
      <span v-if="flagged">
        🚩
      </span>
      <span v-else>
        {{ data.cell }}
      </span>
    </button>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'cell',
  props: {
    data: Object
  },
  data() {
    return {
      flagged: false
    }
  },
  computed: {
    cellClass() {
      const classes = [
        this.flagged && 'flagged',
        this.data.cell !== ' ' && 'checked'
      ]
      switch (this.data.cell) {
        case 1:
          classes.push('blue')
          break
        case 2:
          classes.push('green')
          break
        case 3:
          classes.push('red')
          break
        case 4:
          classes.push('indigo')
          break
        case 5:
          classes.push('crimson')
          break
        case 6:
          classes.push('teal')
          break
        case 7:
          classes.push('turquoise')
          break
        case 8:
          classes.push('black')
          break
        default:
          classes.push('bomb')
      }
      return classes
    }
  },
  methods: {
    toggleFlag() {
      if (this.data.cell === ' ') {
        this.flagged = !this.flagged
      }
    },
    emitClick(e) {
      if (!this.flagged) {
        this.$emit('click', {
          row: this.data.row_index,
          col: this.data.cell_index
        })
        this.checked = true
      }
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.cell {
  display: inline-block;

  .cell-btn {
    &.checked {
      border-style: solid;
      border-color: #cdcdcd;
      border-width: 1px;
      transition: none;
    }

    &.flagged {
      &:active {
        border-style: outset;
      }
    }

    &.blue {
      color: blue;
    }

    &.green {
      color: green;
    }

    &.red {
      color: red;
    }

    &.indigo {
      color: indigo;
    }

    &.crimson {
      color: crimson;
    }

    &.teal {
      color: teal;
    }

    &.turquoise {
      color: turquoise;
    }

    &.teal {
      color: teal;
    }

    &.black {
      color: black;
    }

    &.bomb {
      color: none;
    }
  }
}
</style>
