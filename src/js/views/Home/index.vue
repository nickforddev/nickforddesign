<template>
  <div class="home">
    <logo />
    <github-link />
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Logo from '@/components/Logo'
import GithubLink from './GithubLink'

export default {
  name: 'home',
  components: {
    Logo,
    GithubLink
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style lang="scss">
@import '~%/colors';

.home {
  color: $color-highlight;
}
.logo {
  position: fixed;
  width: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.github-link {
  position: fixed;
  height: 30px;
  width: 30px;
  bottom: 20px;
  left: 20px;
}
</style>
