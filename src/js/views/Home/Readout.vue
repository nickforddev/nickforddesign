<template>
  <div class="readout">
    <pre><mark>{{ output }}</mark></pre>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
const message = `I'm a software developer
and graphic designer
from Boston, MA.
 
I love working with
node.js,
vue,
webpack
`

export default {
  name: 'readout',
  data() {
    return {
      output: '',
      current: 0
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    async start() {
      while (this.current < message.length) {
        await new Promise(resolve => setTimeout(() => { resolve() }, 100))
        this.appendNext()
      }
    },
    appendNext() {
      this.output += message[this.current++]
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
@import '~%/colors';

.readout {
  color: $color-text-dark;
  font-family: monospace;
  padding: 20px;
}
</style>
