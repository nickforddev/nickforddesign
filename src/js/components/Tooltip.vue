<template>
  <transition name="fade">
    <div class="tooltip">
      <slot />
    </div>
  </transition>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'tooltip'
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped lang="scss">
@import '~%/colors';

$background: $color-background-dark;

.tooltip {
  position: absolute;
  left: -1px;
  bottom: calc(100% + 8px);
  padding: 2px 4px;
  border-radius: 3px;
  font-size: 0.7em;
  white-space: nowrap;
  background: $background;
  color: $color-text-light;
  pointer-events: none;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 100%;
    left: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: $background transparent transparent transparent;
  }
}
</style>
