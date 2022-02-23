<template>
  <div class="banner">
    <video class="banner__video" autoplay muted loop>
      <source
        src="https://www.kernelios.com//wp-content//uploads//2020//12//VideoB.mp4"
        type="video/mp4"
      >
    </video>
    <div class="banner__shadow" />
    <div class="banner__head">
      <div class="banner__top">
        <img class="banner__logo" alt="logo" src="~/assets/img/circle-logo.png">
        <h1 class="banner__title">
          {{ $t('landing.title') }}
        </h1>
      </div>
      <div class="banner__text">
        {{ $t('landing.subTitle') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'Banner',
});
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  &__video {
    width: 100%;
  }
  &__shadow {
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.55);
  }

  &__head {
    position: absolute;
    top: 44%;
    left: 47.3%;
    display: flex;
    flex-direction: column;
    z-index: 1000;
  }

  &__top {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 640px;
  }

  &__logo {
    width: 103px;
    height: 103px;
    margin-right: 10px;
  }

  &__title {
    @include textTranslateBot;
    color: $white;
    font-size: 60px;
    line-height: 60px;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__text {
    display: flex;
    color: $yellow-main;
    font-size: 19px;
    font-weight: 500;
    padding-left: 10px;
  }
}
</style>
