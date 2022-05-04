<template>
  <header id="header" :class="headerStyle">
    <img alt="logo" src="~/assets/img/logo.png" class="header__logo">
    <nav class="header__panel">
      <base-button
        v-for="tab in tabs"
        :key="tab.id"
        :link="tab.link"
        class="header__tab"
        mode="link"
      >
        {{ tab.label }}
      </base-button>
    </nav>
  </header>
</template>

<script lang="ts">
import MainVue from '../../mixins/MainVue';
import BaseButton from '~/components/ui/BaseButton/index.vue';
import { COMPUTED_STYLE, LANDING_ANCHORS } from '~/types/types';

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
  },
  data() {
    return {
      tabs: [
        {
          id: 0,
          link: { hash: LANDING_ANCHORS.OPPORTUNITIES },
          label: this.$t('header.about'),
        },
        {
          id: 1,
          link: { hash: LANDING_ANCHORS.COURSES },
          label: this.$t('header.courses'),
        },
        {
          id: 2,
          link: { hash: LANDING_ANCHORS.GRADUATES },
          label: this.$t('header.reviews'),
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
  padding: 20px 40px 20px 20px;
  transition: $transition-header;
  &_background {
    background-color: $header-bg;
    transition-delay: 500ms;
  }

  &__logo {
    margin-top: 7px;
    height: 54px;
  }

  &__panel {
    height: 40px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  &__tab {
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
