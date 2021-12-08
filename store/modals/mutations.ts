import { MutationTree } from 'vuex';
import { IModalOptions, IModalsState } from './state';
import { ModalsMutations } from './consts';

export interface IModalMutations<S = IModalsState> {
  [ModalsMutations.SET_IS_SHOW](state: S, payload: boolean): void,
  [ModalsMutations.SET_CURRENT_MODAL_KEY](state: S, payload: string): void,
  [ModalsMutations.SET_OPTIONS](state: S, payload: IModalOptions): void,
}

const mutations: MutationTree<IModalsState> & IModalMutations = {
  [ModalsMutations.SET_IS_SHOW]: (state, payload) => { state.isShow = payload; },
  [ModalsMutations.SET_CURRENT_MODAL_KEY]: (state, payload) => { state.currentModalKey = payload; },
  [ModalsMutations.SET_OPTIONS]: (state, payload) => { state.options = payload; },
};

export default mutations;
