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
const message = `404
You tried to access
a page that doesn't exist
 
<router-link to="/">go home</router-link>
`

export default {
  name: 'home',
  computed: {
    message: () => message
  }
}
</script>
