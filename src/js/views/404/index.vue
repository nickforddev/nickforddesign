<template>
  <div class="home">
    <router-link to="/">
      <logo />
    </router-link>
    <readout :message="message" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Logo from '@/components/Logo'
import Readout from '@/components/Readout'

const message = `404
You tried to access
a page that doesn't exist
 
<a href="/">go home</a>
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
