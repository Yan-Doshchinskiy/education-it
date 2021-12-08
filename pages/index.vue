<template>
  <div class="landing">
    <video class="landing__banner banner" autoplay muted loop>
      <source src="https://www.kernelios.com//wp-content//uploads//2020//12//VideoB.mp4" type="video/mp4">
      <div class="banner__top">
        <img class="banner__logo" alt="logo" src="~/assets/img/circle-logo.png">
        <h1 class="banner__title">
          Simulating
          <br>
          Cyber Threats
        </h1>
      </div>
      <div class="banner__text">
        TRAINING TODAY’S LEADERS FOR TOMORROW’S THREATS
      </div>
    </video>
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
  height: 900px;
  &__banner {
    width: 100vw;
    height: 100vh;
    object-fit: fill;
  }
  .banner {
    //padding-left: 48%;
    //padding-top: 420px;
    &__top {
      display: flex;
      align-items: center;

      margin-bottom: 10px;
    }
    &__logo {
      width: 103px;
      height: 103px;
      margin-right: 10px;
    }
    &__title {
      color: $white;
      font-size: 60px;
      font-weight: 600;
      text-transform: uppercase;
    }
    &__text {
      display: flex;
      color: $yellow-main;
      font-size: 19px;
      font-weight: 500;
    }
  }
}
</style>
