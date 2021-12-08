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

export const initState = (): IModalsState => ({
  isShow: false,
  currentModalKey: '',
  options: {},
});

export default initState;
