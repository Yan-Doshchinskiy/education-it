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
    :type="type"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import { COMPUTED_STYLE } from '~/types/types';

enum ButtonMode {
  LINK = 'link',
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export default MainVue.extend({
  name: 'base-button',
  props: {
    link: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: ButtonMode.PRIMARY,
    },
    type: {
      type: String,
      default: 'button',
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
        { 'base-button_link': this.mode === ButtonMode.LINK },
        { 'base-button_primary': this.mode === ButtonMode.PRIMARY },
        { 'base-button_secondary': this.mode === ButtonMode.SECONDARY },
      ];
    },
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 18px;
  font-size: 14px;
  line-height: 16px;
  border-radius: 50px;
  transition: $transition-main;
  font-family: $main-font;
  &_primary {
    background-color: $yellow-main;
    color: $black;
    &:hover {
      background-color: $yellow-secondary;
    }
    &:active {
      background-color: $yellow-active;
    }
  }
  &_secondary {
    padding: 10px 27px;
    background-color: transparent;
    border: 1px solid;
    border-color: $black-200;
    color:$black-800;
    &:hover {
      background-color: $black-50;
      //border-color:$black-700;
      color: $black-700;
    }
    &:active {
      background-color: $black-100;
      border-color:$black-900;
      color:$black-900;
    }
  }
  &_link {
    background-color: transparent;
    color: $white;
    font-family: $header-font;
    cursor: pointer;
    transition: $transition-header;
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
