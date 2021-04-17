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
    <minesweeper v-if="minesweeper" />
    <div class="demos">
      <div>
        <span>some projects:</span>
      </div>
      <div>
        <a href="https://github.com/ctrl-freaks/freezeframe.js" target="_blank" rel="nofollow">
          freezeframe
        </a>
      </div>
      <div>
        <a href="https://github.com/nickforddesign/vuebersicht" target="_blank" rel="nofollow">
          vuebersicht
        </a>
      </div>
      <div
        v-for="(name, index) in ['snakes', 'tenprint', 'minesweeper']"
        :key="index"
      >
        <a
          href="#"
          @click.prevent="input(name)"
        >
          {{ name }}
        </a>
      </div>
      <a href="/pico.html">
        pico-8 demo (lua)
      </a>
      <div>
        <router-link to="/demo">another demo</router-link>
      </div>
    </div>
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
import Minesweeper from '@/components/Minesweeper'

export default {
  name: 'app',
  computed: {
    ten_print() {
      return this.user_input.endsWith('tenprint')
    },
    snakes() {
      return this.user_input.endsWith('snakes')
    },
    minesweeper() {
      return this.user_input.endsWith('minesweeper')
    },
    ...mapGetters({
      user_input: 'input'
    })
  },
  methods: {
    input(str) {
      this.$store.state.input = str
    }
  },
  components: {
    GithubLink,
    LinkedinLink,
    CodepenLink,
    Maze,
    Snakes,
    Minesweeper
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
  z-index: 0;
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
.demos {
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-align: right;
  font-family: monospace;

  a, span {
    color: $color-text-light;
    background: $color-text-dark;
  }

  span {
    display: block;
    margin-bottom: 20px;
  }
}
</style>
