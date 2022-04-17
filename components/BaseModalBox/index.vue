<template>
  <div class="base-modal__box">
    <div
      v-if="withHeader"
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
    <div class="base-modal__buttons">
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
    withHeader: {
      type: Boolean,
      default: true,
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
    padding: 30px;
    row-gap: 20px;
    align-self: center;
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
  }
}

</style>
