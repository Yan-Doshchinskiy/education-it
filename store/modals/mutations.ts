import { ModalsMutations, IModalMutations } from './types';

const mutations: IModalMutations = {
  [ModalsMutations.SET_IS_SHOW]: (state, payload) => { state.isShow = payload; },
  [ModalsMutations.SET_CURRENT_MODAL_KEY]: (state, payload) => { state.currentModalKey = payload; },
  [ModalsMutations.SET_OPTIONS]: (state, payload) => { state.options = payload; },
};

export default mutations;
