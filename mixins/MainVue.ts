import Vue from 'vue';
import { mapActions } from 'vuex';
import { Modals } from '~/store/modals/types';

export default Vue.extend({
  data() {
    return {
      Modals,
    };
  },
  methods: {
    ...mapActions({
      ShowModal: 'modals/showModal',
      CloseModal: 'modals/closeModal',
      ShowToast: 'main/showToast',
    }),
  },
});
