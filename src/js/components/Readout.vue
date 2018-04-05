<template>
  <div class="readout">
    <pre><mark v-html="output"></mark></pre>
    <!-- <repl v-if="complete" /> -->
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import { sleep } from '@/utils'
// import Repl from '@/components/Repl'

export default {
  name: 'readout',
  props: {
    message: {
      type: String,
      default: ''
    },
    speed: {
      type: Number,
      default: 80
    }
  },
  data() {
    return {
      output: '',
      current: 0,
      complete: false
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    async start() {
      while (this.current < this.message.length) {
        await sleep(this.speed)
        this.appendNext()
      }
      this.complete = true
      this.$emit('complete')
    },
    appendNext() {
      let next = this.message[this.current]
      let inc = 1
      if (next === '<') {
        let remaining = this.message.substring(this.current, this.message.length)
        const regex = new RegExp(`(?<=<)(.*?)(?=>)`, 'gi')
        next = `<${remaining.match(regex)[0]}>`
        inc = next.length
      }
      this.output += next
      this.current += inc
    }
  }
  // components: {
  //   Repl
  // }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
@import '~%/colors';

.readout {
  font-family: monospace;
  padding: 20px;
  user-select: none;
}
</style>
