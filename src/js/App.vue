<template>
  <div class="app">
    <router-view />
    <div class="links">
      <github-link />
      <linkedin-link />
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import GithubLink from '@/components/GithubLink'
import LinkedinLink from '@/components/LinkedinLink'

export default {
  name: 'app',
  components: {
    GithubLink,
    LinkedinLink
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