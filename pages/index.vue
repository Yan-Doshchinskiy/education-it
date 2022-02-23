<template>
  <div class="landing">
    <banner />
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Banner from '~/components/Banner';

export default MainVue.extend({
  name: 'LandingPage',
  components: { Banner },
});
</script>

<style lang="scss" scoped>
.landing {
  height: max-content;
  position: relative;
}
</style>
