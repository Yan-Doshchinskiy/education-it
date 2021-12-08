<template>
  <header class="header">
    <img alt="logo" src="~/assets/img/logo.png" class="header__logo">
  </header>
</template>

<script lang="ts">
import MainVue from '../../mixins/MainVue';

export default MainVue.extend({
  name: 'header-element',
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 80px;
  padding: 20px;
  &__logo {
    margin-top: 7px;
    width: 264px;
    height: 54px;
  }
}
</style>
