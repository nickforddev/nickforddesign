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
docker
 
<router-link to="/demo">want to see my skills?</router-link>
`

export default {
  name: 'home',
  computed: {
    message: () => message
  }
}
</script>
