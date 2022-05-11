import Vue from 'vue';
import { BREAKPOINTS } from '~/types/types';

export default Vue.extend({
  data() {
    return {
      windowSize: BREAKPOINTS.DESKTOP,
    };
  },
  computed: {
    isDesktop() {
      return this.windowSize > BREAKPOINTS.LAPTOP;
    },
    isLaptop() {
      return this.windowSize > BREAKPOINTS.TABLET && this.windowSize <= BREAKPOINTS.LAPTOP;
    },
    isTablet() {
      return this.windowSize > BREAKPOINTS.MOBILE && this.windowSize <= BREAKPOINTS.TABLET;
    },
    isMobile() {
      return this.windowSize <= BREAKPOINTS.MOBILE;
    },
  },
  created() {
    this.initWindowSize();
    if (process.client) {
      window.addEventListener('resize', this.initWindowSize);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.initWindowSize);
    }
  },
  methods: {
    initWindowSize() {
      if (process.client) {
        this.windowSize = window.innerWidth;
      }
    },
  },
});
