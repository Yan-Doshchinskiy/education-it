import { IModalGetters } from '~/store/modals/types';

const getters: IModalGetters = {
  getIsShow: (state) => state.isShow,
  getCurrentModalKey: (state) => state.currentModalKey,
  getOptions: (state) => state.options,
};

export default getters;
