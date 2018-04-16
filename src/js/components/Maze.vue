<template>
  <div class="maze" />
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import { sleep } from '@/utils'

export default {
  name: 'maze',
  mounted() {
    this.start()
  },
  methods: {
    async start() {
      const $maze = document.querySelector('.maze')
      while (true) {
        await sleep(6)
        $maze.innerHTML += Math.random() >= 0.5 ? '╱' : '╲'
      }
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.maze {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  margin: 0;
  font-size: 22px;
  line-height: 22px;
  color: #876de8;
  width: 105%;
  word-break: break-all;
  overflow-x: hidden;
}
</style>
