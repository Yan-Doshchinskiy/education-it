import { GetterTree } from 'vuex';
import { IModalOptions, IModalsState } from '~/store/modals/state';

export interface IModalGetters<S = IModalsState> {
  getIsShow(state: S): boolean,
  getCurrentModalKey(state: S): string,
  getOptions(state: S): IModalOptions,
}

export type ModalGetterReturnTypes = {
  [F in keyof IModalGetters]: ReturnType<(IModalGetters[F])>
}

const getters: GetterTree<IModalsState, IModalsState> & IModalGetters = {
  getIsShow: (state) => state.isShow,
  getCurrentModalKey: (state) => state.currentModalKey,
  getOptions: (state) => state.options,
};

export default getters;
