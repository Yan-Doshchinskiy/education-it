<template>
  <header id="header" :class="headerStyle">
    {{ test }}
    <nuxt-link :to="logoLink">
      <!--the logo changes via css when the screen width changes-->
      <img alt="logo" src="" class="header__logo">
    </nuxt-link>
    <nav class="header__panel">
      <base-button
        v-for="tab in tabs"
        :key="tab.id"
        :link="tab.link"
        class="header__tab"
        mode="link"
      >
        {{ $t(tab.label) }}
      </base-button>
    </nav>
  </header>
</template>

<script lang="ts">
import MainVue from '../../mixins/MainVue';
import BaseButton from '~/components/ui/BaseButton/index.vue';
import { COMPUTED_STYLE, LANDING_ANCHORS, PATH } from '~/types/types';

export default MainVue.extend({
  name: 'header-element',
  components: { BaseButton },
  props: {
    isTransparent: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    headerStyle(): COMPUTED_STYLE {
      return [
        'header',
        {
          header_background: !this.isTransparent,
        },
      ];
    },
    test():string {
      return process.env.TEST_VALUE as string;
    },
  },
  data() {
    return {
      logoLink: {
        path: PATH.ROOT,
        hash: LANDING_ANCHORS.ROOT,
      },
      tabs: [
        {
          id: 0,
          link: { hash: LANDING_ANCHORS.OPPORTUNITIES },
          label: 'header.about',
        },
        {
          id: 1,
          link: { hash: LANDING_ANCHORS.COURSES },
          label: 'header.courses',
        },
        {
          id: 2,
          link: { hash: LANDING_ANCHORS.GRADUATES },
          label: 'header.reviews',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  @include container;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 20;
  height: 80px;
  padding: 20px;
  transition: $transition-header;
  column-gap: 10px;
  &__tab {
    font-size: 14px;
    line-height: 16px;
  }
  &_background {
    background-color: $header-bg;
    transition-delay: 500ms;
  }

  &__logo {
    height: 54px;
    min-width: 54px;
  }

  &__logo {
    content: url('~/assets/img/logo.png');
  }

  &__panel {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    column-gap: 20px;
  }

  @include _767 {
    &__logo {
      content: url('~/assets/img/circle-logo.png');
    }
  }
  @include _480 {
    padding: 15px;
    height: 60px;
    &__logo {
      height: 40px;
      min-width: 40px;
    }
    &__tab {
      font-size: 12px;
      line-height: 14px;
      padding: 10px 7px;
      height: unset;
    }
  }
}
</style>
