export enum PATH {
  ROOT = '/',
  ABOUT = '/about',
  ACCOUNT = '/account',
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in'
}

export enum LANDING_ANCHORS {
  BANNER = 'landing-banner',
  OPPORTUNITIES = 'landing-opportunities',
  COURSES = 'landing-courses',
  GRADUATES = 'landing-graduates',
}

export type COMPUTED_STYLE = Array<string | {[key: string]: boolean}>

export default PATH;
