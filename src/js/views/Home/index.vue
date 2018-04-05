<template>
  <div class="home">
    <logo />
    <readout :message="message" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Logo from '@/components/Logo'
import Readout from '@/components/Readout'

const message = `I'm a software developer
and graphic designer
from Boston, MA.
 
I love working with
node.js,
vue,
webpack
`

export default {
  name: 'home',
  computed: {
    message: () => message
  },
  components: {
    Logo,
    Readout
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style lang="scss">
.logo {
  position: fixed;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
