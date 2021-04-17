<template>
  <div class="github-link">
    <div class="container">
      <a
        href="https://github.com/nickforddesign"
        target="_blank"
        rel="nofollow"
        @mouseover="onEnter"
        @mouseleave="onLeave"
        >
        <octocat />
      </a>
      <tooltip v-if="hovering">
        Github Profile
      </tooltip>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Octocat from '@/components/Octocat'
export default {
  name: 'github-link',
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
    Octocat
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.container {
  position: relative;
}
</style>
