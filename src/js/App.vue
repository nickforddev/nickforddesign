<template>
  <div class="app">
    <router-view />
    <div class="links">
      <github-link />
      <codepen-link />
      <linkedin-link />
    </div>
    <maze v-if="ten_print" />
    <snakes v-if="snakes" />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import { mapGetters } from 'vuex'
import GithubLink from '@/components/GithubLink'
import LinkedinLink from '@/components/LinkedinLink'
import CodepenLink from '@/components/CodepenLink'
import Maze from '@/components/Maze'
import Snakes from '@/components/Snakes'

export default {
  name: 'app',
  computed: {
    ten_print() {
      return this.user_input.endsWith('tenprint')
    },
    snakes() {
      return this.user_input.endsWith('snakes')
    },
    ...mapGetters({
      user_input: 'input'
    })
  },
  components: {
    GithubLink,
    LinkedinLink,
    CodepenLink,
    Maze,
    Snakes
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style lang="scss">
@import '~%/colors';

.logo {
  position: fixed;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.links {
  position: fixed;
  bottom: 20px;
  left: 20px;

  & > div {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-right: 10px;
  }
}
</style>
