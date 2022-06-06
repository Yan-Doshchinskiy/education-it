import { ActionContext } from 'vuex';

export enum Modals {
  DEFAULT = 'DEFAULT',
  SALE = 'SALE',
}

export interface IModalOptions {
  key?: string;
  title?: string;
  text?: string,
  isUnclosable?: boolean,
}

export interface IModalsState {
  isShow: boolean,
  currentModalKey: string,
  options: IModalOptions,
}

export enum ModalsMutations {
  SET_IS_SHOW = 'SET_IS_SHOW',
  SET_CURRENT_MODAL_KEY = 'SET_CURRENT_MODAL_KEY',
  SET_OPTIONS = 'SET_OPTIONS',
}

export interface IModalMutations<S = IModalsState> {
  [ModalsMutations.SET_IS_SHOW](state: S, payload: boolean): void,
  [ModalsMutations.SET_CURRENT_MODAL_KEY](state: S, payload: string): void,
  [ModalsMutations.SET_OPTIONS](state: S, payload: IModalOptions): void,
}

export interface IModalGetters<S = IModalsState> {
  getIsShow(state: S): boolean,
  getCurrentModalKey(state: S): string,
  getOptions(state: S): IModalOptions,
}

export type ModalGetterReturnTypes = {
  [F in keyof IModalGetters]: ReturnType<(IModalGetters[F])>
}

export type ModalAugmentedActionContext = {
  commit<K extends keyof IModalMutations>(
    key: K,
    payload: Parameters<IModalMutations[K]>[1]
  ): ReturnType<IModalMutations[K]>
} & Omit<ActionContext<IModalsState, IModalsState>, 'commit'>

export interface IModalActions<AC = ModalAugmentedActionContext> {
  showModal(context: AC, payload: IModalOptions): void,
  closeModal(context: AC): void,
}
