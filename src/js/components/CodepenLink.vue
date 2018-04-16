<template>
  <div class="codepen-link">
    <div class="container">
      <a
        href="https://codepen.io/nickforddesign/pens/public/"
        target="_blank"
        @mouseover="onEnter"
        @mouseleave="onLeave"
        >
        <codepen />
      </a>
      <tooltip v-if="hovering">
        Codepen Profile
      </tooltip>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Codepen from '@/components/Codepen'
export default {
  name: 'codepen-link',
  data() {
    return {
      hovering: false
    }
  },
  methods: {
    onEnter() {
      this.hovering = true
    },
    onLeave() {
      this.hovering = false
    }
  },
  components: {
    Codepen
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.container {
  position: relative;
}
</style>
