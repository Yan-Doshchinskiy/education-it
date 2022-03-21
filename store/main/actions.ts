import type { ActionTree } from 'vuex';

const actions: ActionTree<null, null> = {
  showToast(_, {
    title = 'Error',
    text = 'Something went wrong',
    variant = 'danger',
    append = false,
    position = 'b-toaster-bottom-right',
    delay = 5000,
  }: {
    title: string,
    text: string,
    variant: string,
    append: boolean,
    position: string,
    delay: number
  }) {
    // @ts-ignore
    this._vm.$bvToast.toast(text, {
      title: title || 'Error',
      variant,
      solid: true,
      toaster: position,
      appendToast: append,
      autoHideDelay: delay,
    });
  },
};
export default actions;
