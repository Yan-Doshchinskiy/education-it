<template>
  <div class="landing">
    <banner />
    <opportunities />
    <courses />
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Banner from '~/components/Banner/index.vue';
import Opportunities from '~/components/LandingOpportunities/index.vue';
import Courses from '~/components/LandingCourses/index.vue';

export default MainVue.extend({
  name: 'LandingPage',
  components: { Banner, Opportunities, Courses },
});
</script>

<style lang="scss" scoped>
.landing {
  height: max-content;
  position: relative;
}
</style>
