<template>
  <div class="header">
    <div class="icon"></div>
    <div class="text">Bear Music</div>
  </div>
</template>

<style lang="scss" scoped>
@import '~common/sass/variable';
@import '~common/sass/mixin';

.header {
  position: relative;
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    @include bg-image(logo);
    width: 30px;
    height: 32px;
    vertical-align: top;
    margin-right: 9px;
    background-size: 30px 32px;
    margin-top: 6px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
}
</style>
