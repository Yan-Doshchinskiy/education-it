import { ActionTree, Commit } from 'vuex';
import { ILoaderState } from './state';
import LoaderMutations from './consts';

export interface ILoaderActions<C = Commit> {
  setLoading({ commit }: { commit: C }, payload: boolean): void,
}

const actions: ActionTree<ILoaderState, ILoaderState> & ILoaderActions = {
  setLoading({ commit }, payload) {
    commit(LoaderMutations.SET_IS_LOADING, payload);
  },
};

export default actions;
