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
const message = `let's have a little fun...
 
> // oh look, we got a js repl!
> // what can we do here?
> document.body.style.color = '#fff';
> document.body.style.background = '#000';
> document.querySelector('.logo').style.left = '10%';
> document.querySelector('.logo').style.width = '400px';
> document.querySelectorAll('svg').forEach($el => $el.style.transform = 'rotate(360deg)');
> document.querySelector('.logo').style.left = '90%';
> document.querySelector('.logo svg').style.transform = 'skew(-10deg, 0deg)';
 
> // hmmm what else can we do?

let's add some css
>[css] .foo { color: blue; }
 
let's write some html
>[html] &lt;div class="foo"&gt;I'm foo!&lt;/div&gt;
<div class="foo">I'm foo!</div>
 
let's try typing out some vue template markup:
 
>[html] &lt;router-link to="/"&gt;&lt;logo class="logo-2" /&gt;&lt;router-link&gt;
<router-link to="/"><logo class="logo-2" /></router-link>
 
neat! we got it to render via vue's runtime compiler!
 
that's all for now, check out my <a href="https://github.com/nickforddesign" target="_blank">github</a> for more
`

export default {
  name: 'demo',
  data() {
    return {
      initialStyle: {
        ...document.body.style
      }
    }
  },
  computed: {
    message: () => message
  },
  mounted() {
    document.body.style = this.initialStyle
    document.body.classList.add('demo')
  },
  beforeDestroy() {
    document.body.style = this.initialStyle
    document.body.classList.remove('demo')
  }
}
</script>

<style lang="scss">
.readout {
  .foo {
    color: blue;
  }
}
</style>

