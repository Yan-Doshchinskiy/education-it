export enum PATH {
  ROOT = '/',
  ABOUT = '/about',
  ACCOUNT = '/account',
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in'
}

export type COMPUTED_STYLE = Array<string | {[key: string]: boolean}>

export default PATH;
