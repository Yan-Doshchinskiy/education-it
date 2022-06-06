<template>
  <transition name="fade">
    <div
      v-if="isShow"
      class="base-modal"
      @mousedown.self="backgroundClick"
    >
      <component :is="currentModalKey" />
    </div>
  </transition>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';
import MainVue from '~/mixins/MainVue';
import ModalSale from '~/components/Modals/ModalSale/index.vue';
import { Modals } from '~/store/modals/types';

export default MainVue.extend({
  name: 'BaseModalContainer',
  components: {
    [Modals.SALE]: ModalSale,
  },
  computed: {
    ...mapGetters({
      isShow: 'modals/getIsShow',
      currentModalKey: 'modals/getCurrentModalKey',
      options: 'modals/getOptions',
    }),
  },
  methods: {
    backgroundClick() {
      if (!this.options.isUnclosable) {
        this.CloseModal();
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.base-modal {
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(#000000, .4);
  z-index: 100;
  display: flex;
  justify-content: center;
}
</style>
