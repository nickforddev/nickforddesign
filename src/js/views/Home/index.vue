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
javascript,
node.js,
vue,
scss,
webpack,
docker,
linux,
etc
 
try typing "snakes", "tenprint", or "minesweeper"
to see some demos...
 
<router-link to="/demo">or click here to see some skills</router-link>

`

export default {
  name: 'home',
  computed: {
    message: () => message
  }
}
</script>
