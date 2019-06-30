<template>
  <div class="readout">
    <component :is="transformed" />
    <!-- <repl v-if="complete" /> -->
    <pre>{{ output }}</pre>
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
      prev: null,
      current: 0,
      complete: false,
      startOfLine: true,
      isExpressionInput: false,
      expression: null
    }
  },
  computed: {
    transformed() {
      return {
        template: `<pre v-highlightjs>${this.output}</pre>`
      }
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
      const msg = this.message
      const cur = this.current
      if (cur >= 4) {
        if (`${msg[cur - 3]}${msg[cur - 2]}${msg[cur - 1]}` === '\n> ') {
          this.isExpressionInput = true
          this.expression = ''
          this.output += '<code class="javascript">'
        }
        if (this.isExpressionInput) {
          if (msg[cur] === '\n' || msg[cur + 1] === undefined) {
            this.evaluate(this.expression)
          } else {
            this.expression += msg[cur]
          }
        }
      }
      let next = msg[this.current]
      let inc = 1
      if (next === '<') {
        let remaining = msg.substring(this.current, msg.length)
        const regex = new RegExp(`(?<=<)(.*?)(?=>)`, 'gi')
        next = `<${remaining.match(regex)[0]}>`
        inc = next.length
      }
      this.output += next
      this.current += inc
      this.prev = this.current && this.current - 1
    },
    evaluate(expression) {
      eval(expression) // eslint-disable-line
      this.expression = null
      this.output += '</code>'
    }
  }
  // components: {
  //   Repl
  // }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style lang="scss">
@import '~%/colors';

.readout {
  position: relative;
  font-family: monospace;
  padding: 20px;
  user-select: none;
  z-index: 1;

  .hljs {
    position: relative;
    display: inline-block;
    line-height: 10px;
    top: 6px;
  }
}
</style>
