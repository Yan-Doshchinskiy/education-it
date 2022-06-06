import { ModalsMutations, IModalActions, Modals } from './types';

const actions: IModalActions = {
  showModal({ commit }, payload) {
    commit(ModalsMutations.SET_IS_SHOW, true);
    commit(ModalsMutations.SET_CURRENT_MODAL_KEY, payload.key || Modals.DEFAULT);
    commit(ModalsMutations.SET_OPTIONS, payload);
  },
  closeModal({ commit }) {
    commit(ModalsMutations.SET_IS_SHOW, false);
    commit(ModalsMutations.SET_CURRENT_MODAL_KEY, '');
    commit(ModalsMutations.SET_OPTIONS, {});
  },
};

export default actions;
