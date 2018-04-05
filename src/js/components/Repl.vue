<template>
  <form class="repl" @submit.prevent="evaluate">
    <span>$ > </span>
    <input
      type="text"
      v-model="input"
      ref="input">
    <input type="submit" style="display: none" />
  </form>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'repl',
  data() {
    return {
      input: ''
    }
  },
  async mounted() {
    this.$refs.input.focus()
  },
  methods: {
    evaluate() {
      alert(this.input)
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
@import '~%/colors';

.repl {
  margin-top: 10px;
}

input[type="text"] {
  border: 0;
  font-family: monospace;
  font-size: 12px;
  padding: 2px 0;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
