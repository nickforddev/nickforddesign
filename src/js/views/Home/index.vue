<template>
  <div class="home">
    <logo />
    <readout />
    <div class="links">
      <github-link />
      <linkedin-link />
    </div>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
import Logo from '@/components/Logo'
import Readout from './Readout'
import GithubLink from './GithubLink'
import LinkedinLink from './LinkedinLink'

export default {
  name: 'home',
  components: {
    Logo,
    Readout,
    GithubLink,
    LinkedinLink
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
// .github-link {
//   position: fixed;
//   height: 30px;
//   width: 30px;
//   bottom: 20px;
//   left: 20px;
// }
// .linkedin-link {
//   position: fixed;
//   height: 30px;
//   width: 30px;
//   bottom: 20px;
//   left: 20px;
// }
</style>
