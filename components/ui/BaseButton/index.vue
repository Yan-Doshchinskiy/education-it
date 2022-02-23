<template>
  <nuxt-link
    v-if="link"
    :class="getButtonStyle"
    :to="link"
  >
    <slot />
  </nuxt-link>
  <button
    v-else
    :class="getButtonStyle"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import { COMPUTED_STYLE } from '~/types/types';

export default MainVue.extend({
  name: 'base-button',
  props: {
    link: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {

    };
  },
  computed: {
    getButtonStyle():COMPUTED_STYLE {
      return [
        'base-button',
        { 'base-button_link': this.mode === 'link' },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 18px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 50px;
  transition: $transition-header;
  &_primary {

  }
  &_link {
    background-color: transparent;
    color: $white;
    font-family: $header-font;
    cursor: pointer;
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
