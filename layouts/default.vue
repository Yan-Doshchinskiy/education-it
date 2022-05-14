<template>
  <div ref="layout" class="layout">
    <Header :is-transparent="isHeaderTransparent" />
    <nuxt />
    <Footer />
    <BaseModalContainer />
  </div>
</template>
<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Header from '~/components/Header/index.vue';
import Footer from '~/components/Footer/index.vue';
import BaseModalContainer from '~/components/BaseModalContainer/index.vue';

export default MainVue.extend({
  name: 'default-layout',
  components: {
    Header,
    BaseModalContainer,
    Footer,
  },
  data() {
    return {
      isHeaderTransparent: true,
    };
  },
  methods: {
    handleScroll({ target: { scrollTop } }: {target: {scrollTop: number}}):void {
      if (scrollTop) {
        if (this.isHeaderTransparent) {
          this.isHeaderTransparent = false;
        }
      } else if (!this.isHeaderTransparent) {
        this.isHeaderTransparent = true;
      }
    },
  },
  async mounted():Promise<void> {
    if (process.client) {
      const layout = await this.$refs.layout;
      layout?.addEventListener('scroll', this.handleScroll);
    }
  },
  async beforeDestroy():Promise<void> {
    if (process.client) {
      const layout = await this.$refs.layout;
      layout?.removeEventListener('scroll', this.handleScroll);
    }
  },
});
</script>
<style lang="scss" scoped>
.layout {
  @include container;
  margin: auto;
  position: relative;
  height: 100vh;
  overflow-y: auto;
    background-color: $main-bg;
}
</style>
