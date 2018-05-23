<template>
  <canvas class="snakes" width="1000" height="592" />
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
// import { sleep } from '@/utils'
export default {
  name: 'snakes',
  async mounted() {
    await this.$nextTick()
    this.start()
  },
  methods: {
    start() {
      const $canvas = this.$el
      const ctx = $canvas.getContext('2d')
      const inc = 10
      const size = 20
      let time = 0
      let y = 0
      let x = 0
      let ydir = true
      let xdir = true

      function update() {
        const height = $canvas.height
        const width = $canvas.width

        time = time + 1

        y = ydir
          ? y + inc
          : y - inc
        x = xdir
          ? x + inc
          : x - inc

        if (y >= height - size || y <= 0) {
          ydir = !ydir
        }
        if (x >= width - size || x <= 0) {
          xdir = !xdir
        }
        const color = 0 | (y / height * 360)
        ctx.shadowColor = ctx.fillStyle = `hsl(${color}, 100%, 50%)`
        ctx.shadowBlur = 24
        const dy = y
        const dx1 = x
        const dx2 = width - x - size
        ctx.fillRect(dx1, dy, size, size)
        ctx.shadowColor = ctx.fillStyle = `hsl(${360 - color}, 100%, 50%)`
        ctx.fillRect(dx2, dy, size, size)
        requestAnimationFrame(update)
      }
      requestAnimationFrame(update)
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.snakes {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>
