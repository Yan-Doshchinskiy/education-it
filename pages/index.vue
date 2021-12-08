<template>
  <div class="landing">
    <div class="landing__banner">
      1
    </div>
    asdfafsd
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  data: () => ({
    test: '',
  }),
});
</script>

<style lang="scss" scoped>
.landing {
  @include container;
  background-color: cadetblue;
  height: 900px;
  &__banner {
    width: 100%;
    height: 100vh;
    background-image: url(~/assets/img/header.gif);
    background-size: 100% 100%;
  }
}
</style>
