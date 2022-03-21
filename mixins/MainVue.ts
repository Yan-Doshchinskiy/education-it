import Vue from 'vue';
import { mapActions } from 'vuex';
import { Modals } from '~/store/modals/consts';

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
      SetLoader: 'loader/setLoading',
      ShowToast: 'main/showToast',
    }),
  },
});
