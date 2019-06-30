<template>
  <div class="demo">
    <router-link to="/">
      <logo />
    </router-link>
    <readout :message="message" :speed="40" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
const message = `let's play a game...

> document.body.style.color = '#fff';
> document.body.style.background = '#000';
> document.querySelector('.logo').style.left = '10%';
> document.querySelector('.logo').style.width = '400px';
> document.querySelector('.logo').style.left = '90%';
`

export default {
  name: 'demo',
  computed: {
    message: () => message
  },
  mounted() {
    document.body.classList.add('demo')
  },
  beforeDestroy() {
    document.body.classList.remove('demo')
  }
}
</script>
