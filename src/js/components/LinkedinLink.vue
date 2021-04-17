<template>
  <div class="linkedin-link">
    <div class="container">
      <a
        href="https://www.linkedin.com/in/nick-ford-19128653/"
        target="_blank"
        rel="nofollow"
        @mouseover="onEnter"
        @mouseleave="onLeave"
        >
        <linkedin-icon />
      </a>
      <tooltip v-if="hovering">
        LinkedIn Profile
      </tooltip>
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import LinkedinIcon from '@/components/Linkedin'
export default {
  name: 'linkedin-link',
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
    LinkedinIcon
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
.container {
  position: relative;
}
</style>
