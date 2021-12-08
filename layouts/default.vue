<template>
  <div class="layout">
    <Header />
    <div class="layout__content">
      <nuxt />
    </div>
    <base-modal-container />
    <loader-screen />
  </div>
</template>
<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Header from '~/components/Header';

export default MainVue.extend({
  name: 'default-layout',
  components: {
    Header,
  },
});
</script>
<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100vh;
  overflow-y: auto;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
//.template {
//  height: 100%;
//  min-height: 100vh;
//  overflow: auto;
//  &__content {
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    position: relative;
//  }
//}
</style>
