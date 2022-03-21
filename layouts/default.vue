<template>
  <div class="layout">
    <Header />
    <nuxt />
    <base-modal-container />
    <loader-screen />
  </div>
</template>
<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Header from '~/components/Header/index.vue';

export default MainVue.extend({
  name: 'default-layout',
  components: {
    Header,
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
}
</style>
