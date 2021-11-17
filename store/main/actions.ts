import type { ActionTree } from 'vuex'

const actions: ActionTree<null, null> = {
  showToast (_, value: {title: string, text: string, variant: string, append: boolean, position: string, delay: number}) {
    // @ts-ignore
    this._vm.$bvToast.toast(value.text, {
      title: value.title || 'Error',
      variant: value.variant || 'danger',
      solid: true,
      toaster: value.position || 'b-toaster-bottom-right',
      appendToast: value.append || false,
      autoHideDelay: value.delay || 5000
    })
  }
}
export default actions
