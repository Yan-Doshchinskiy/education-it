<template>
  <header class="header">
    <img alt="logo" src="~/assets/img/logo.png" class="header__logo">
    <nav class="header__panel">
      <nuxt-link
        v-for="tab in tabs"
        :key="tab.id"
        :to="tab.link"
        class="header__tab"
      >
        {{ tab.label }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
import MainVue from '../../mixins/MainVue';

export default MainVue.extend({
  name: 'header-element',
  data() {
    return {
      tabs: [
        {
          id: 0,
          link: '/',
          label: 'Курсы',
        },
        {
          id: 1,
          link: '/44',
          label: 'О нас',
        },
        {
          id: 2,
          link: '/123',
          label: 'Личный кабинет',
        },

      ],
    };
  },
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
  padding: 20px 40px 20px 20px;
  &__logo {
    margin-top: 7px;
    width: 264px;
    height: 54px;
  }
  &__panel {
    height: 40px;
    display: flex;
    align-items: center;
  }
  &__tab {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 18px;
    background-color: transparent;
    color: $white;
    font-family: $header-font;
    font-size: 14px;
    line-height: 16px;
    border-radius: 50px;
    cursor: pointer;
    transition: $transition-header;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: $yellow-main;
      color: $black;
    }
    &:active {
      background-color: $yellow-active;
      color: $black;
    }
  }

}
</style>
