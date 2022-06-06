import { IModalsState } from '~/store/modals/types';

export const initState = (): IModalsState => ({
  isShow: false,
  currentModalKey: '',
  options: {},
});

export default initState;
