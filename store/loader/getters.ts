import { GetterTree } from 'vuex';
import { ILoaderState } from '~/store/loader/state';

export interface ILoaderGetters<S = ILoaderState> {
  getIsLoading(state: S): boolean,
}

export type LoaderGetterReturnTypes = {
  [F in keyof ILoaderGetters]: ReturnType<(ILoaderGetters[F])>
}

const getters: GetterTree<ILoaderState, ILoaderState> & ILoaderGetters = {
  getIsLoading: (state) => state.isLoading,
};

export default getters;
