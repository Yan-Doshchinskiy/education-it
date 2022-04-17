<template>
  <base-modal-box :with-header="false" :title="$t('modals.sale.title')">
    <template slot="content">
      <div class="modal-sale">
        <img src="~/assets/img/marketing/test-sale.png" alt="sale">
      </div>
    </template>
    <template slot="buttons">
      <base-button
        mode="secondary"
        @click="CloseModal"
      >
        {{ $t("buttons.later") }}
      </base-button>
      <base-button class="modal-sale__confirm" @click="handleConfirm">
        {{ $t("buttons.go") }}
      </base-button>
    </template>
  </base-modal-box>
</template>

<script lang="ts">
import { mapGetters } from 'vuex';
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'ModalSale',
  computed: {
    ...mapGetters({
      options: 'modals/getOptions',
    }),
  },
  methods: {
    handleConfirm():void {
      console.log('confirm');
    },
  },
});
</script>

<style lang="scss">
.modal-sale {
}
</style>
