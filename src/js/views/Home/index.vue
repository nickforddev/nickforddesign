<template>
  <div class="home">
    <logo />
    <readout :message="message" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
const message = `I'm a software engineer
from Boston, MA.
 
i ❤ working with:
typescript,
javascript,
node.js,
vue,
scss,
webpack,
docker,
linux,
ruby/rails,
and many other tools
 
try typing "snakes", "tenprint", or "minesweeper"
to see some fun stuff...
 
<router-link to="/demo">or click here to see a demo</router-link>

`

export default {
  name: 'home',
  computed: {
    message: () => message
  }
}
</script>
