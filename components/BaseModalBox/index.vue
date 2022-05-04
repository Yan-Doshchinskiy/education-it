<template>
  <div
    class="base-modal__box"
    :class="{
      'base-modal__box_full': withoutHeader
    }"
  >
    <div
      v-if="!withoutHeader"
      class="base-modal__header"
    >
      <div class="base-modal__title">
        <span>{{ options.title || title || 'Default' }}</span>
      </div>
      <button
        v-if="!options.isUnclosable"
        class="base-modal__x icon-cross"
        @click="CloseModal"
      />
    </div>
    <div class="base-modal__content">
      <slot name="content" />
    </div>
    <div
      class="base-modal__buttons"
      :class="{
        'base-modal__buttons_full': withoutHeader
      }"
    >
      <slot name="buttons" />
    </div>
  </div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
    isUnclosable: {
      type: Boolean,
      default: false,
    },
    withoutHeader: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
});
</script>
<style lang="scss" scoped>
.base-modal {
  &__box {
    height: max-content;
    font-size: 16px;
    white-space: normal;
    word-break: break-word;
    display: flex;
    flex-direction: column;
    vertical-align: middle;
    width: 100%;
    position: relative;
    max-width: 500px;
    text-align: left;
    background: #FFFFFF;
    border-radius: 20px;
    overflow: hidden;
    padding: 30px;
    row-gap: 20px;
    align-self: center;
    &_full {
      padding: 0;
      row-gap: 0;
    }
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
  }
  &__title {
    font-size: 24px;
  }
  &__x {
    &:before {
      font-size: 30px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &__buttons {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    &_full {
      padding: 20px;
    }
  }
}

</style>
