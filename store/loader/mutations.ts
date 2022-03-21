import { MutationTree } from 'vuex';
import { ILoaderState } from './state';
import LoaderMutations from './consts';

export interface ILoaderMutations<S = ILoaderState> {
  [LoaderMutations.SET_IS_LOADING](state: S, payload: boolean): void,
}

const mutations: MutationTree<ILoaderState> & ILoaderMutations = {
  [LoaderMutations.SET_IS_LOADING]: (state, payload) => { state.isLoading = payload; },
};

export default mutations;
