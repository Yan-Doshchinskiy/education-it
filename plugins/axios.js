// /* eslint-disable no-param-reassign,consistent-return */
// // eslint-disable-next-line func-names,@typescript-eslint/explicit-function-return-type
// export default function ({ $axios, store }) {
//   $axios.onRequest((config) => {
//     if (store.getters['auth/isAuth']) {
//       const urlName = config.url.split('/').pop()
//       const token = urlName === 'refresh-token' ? store.getters['auth/refreshToken'] : store.getters['auth/accessToken']
//       // console.log(token);
//       config.headers.authorization = `Bearer ${token}`
//       console.log('working')
//     }
//   })
//   // eslint-disable-next-line no-unused-vars
//   $axios.onError(async (error) => {
//     console.dir(error)
//     const originalRequest = error.config
//     if (error.config.url === 'auth/refresh-token') {
//       return
//     } if (error.response.status === 401) {
//       // app.$tokensRefresher.refreshTokens();
//       await store.dispatch('auth/refresh-token')
//       return $axios(originalRequest)
//     } if (error.response.data.code !== 400010) {
//       console.log(error)
//       store.dispatch('main/showToast', {
//         title: 'Error',
//         text: error.response.data.message
//       })
//     }
//     throw error
//   })
// }
