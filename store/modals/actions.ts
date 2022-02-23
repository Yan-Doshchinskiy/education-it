import { ActionTree, Commit } from 'vuex';
import { IModalOptions, IModalsState } from './state';
import { ModalsMutations } from './consts';

export interface IModalActions<C = Commit> {
  showModal({ commit }: { commit: C }, payload: IModalOptions): void,
  closeModal({ commit }: { commit: C }): void,
}

const actions: ActionTree<IModalsState, IModalsState> & IModalActions = {
  showModal({ commit }, payload) {
    commit(ModalsMutations.SET_IS_SHOW, true);
    commit(ModalsMutations.SET_CURRENT_MODAL_KEY, payload.key);
    commit(ModalsMutations.SET_OPTIONS, payload);
  },
  closeModal({ commit }) {
    commit(ModalsMutations.SET_IS_SHOW, false);
    commit(ModalsMutations.SET_CURRENT_MODAL_KEY, '');
    commit(ModalsMutations.SET_OPTIONS, {});
  },
};

export default actions;
