<template>
  <div class="landing">
    <banner />
    <opportunities />
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Banner from '~/components/Banner/index.vue';
import Opportunities from '~/components/LandingOpportunities/index.vue';

export default MainVue.extend({
  name: 'LandingPage',
  components: { Banner, Opportunities },
});
</script>

<style lang="scss" scoped>
.landing {
  height: max-content;
  position: relative;
}
</style>
