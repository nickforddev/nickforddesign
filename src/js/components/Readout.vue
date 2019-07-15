<template>
  <div class="readout">
    <component :is="transformed" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import { sleep } from '@/utils'

const PROMPT_REGEX = /^>\s?/gi
const FORMAT_REGEX = /\[(.*?)\]/gi

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
      lines: this.message.split('\n'),
      outputLines: [],
      complete: false
    }
  },
  computed: {
    transformed() {
      return {
        template: `
        <div>
          ${this.outputLines.map(line => `<pre v-highlightjs>${`${line.start}${line.body}${line.end}`}</pre>`).join('\n')}
        </div>
        `
      }
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    async start() {
      await this.typeLines()
      this.complete = true
      this.$emit('complete')
    },
    async typeLines() {
      for (const index in this.lines) {
        await this.handleLine(index)
      }
    },
    async handleLine(index) {
      const line = this.lines[index]
      if (line.match(PROMPT_REGEX)) {
        await this.typeCodeLine(line, index)
      } else {
        await this.typeNormalLine(line, index)
      }
    },
    async typeNormalLine(line, index) {
      this.outputLines.push({
        start: '<mark>',
        body: '',
        end: '</mark>'
      })
      await this.typeLine(line, index)
    },
    async typeCodeLine(line, index) {
      const promptFormatMeta = line.match(FORMAT_REGEX)
      const customFormat = promptFormatMeta && promptFormatMeta[0]
      const format = customFormat
        ? customFormat.substring(1, customFormat.length - 1)
        : 'javascript'
      this.outputLines.push({
        start: `<code class="${format}">`,
        body: '',
        end: '</code>'
      })
      let expression = line.replace(PROMPT_REGEX, '')
      if (customFormat) {
        expression = expression.replace(customFormat + ' ', '')
      }
      await this.typeLine(expression, index)
      if (format === 'javascript') {
        this.evaluate(expression)
      }
    },
    async typeLine(line, index, property = 'body') {
      const target = property
        ? this.outputLines[index]
        : this.outputLines
      const path = property || index
      for (let i = 0; i < line.length; i++) {
        const char = line[i]
        let next = char
        if (char === '<') {
          const remaining = line.substring(i, line.length)
          const regex = new RegExp(`(?<=<)(.*?)(?=>)`, 'gi')
          next = `<${remaining.match(regex)[0]}>`
          i += next.length - 1
        }
        this.$set(target, path, target[path] + next)
        await sleep(this.speed)
        await this.$nextTick()
      }
    },
    evaluate(expression) {
      eval(expression) // eslint-disable-line
    }
  }
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
    line-height: 8px;
    margin-bottom: -4px;
    background: $color-text-dark;
  }
}
</style>
