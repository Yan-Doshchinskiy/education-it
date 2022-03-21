<template>
  <div class="landing">
    <banner />
    <opportunities />
    <courses />
    <graduates />
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';
import Banner from '~/components/Banner/index.vue';
import Opportunities from '~/components/LandingOpportunities/index.vue';
import Courses from '~/components/LandingCourses/index.vue';
import Graduates from '~/components/LandingGraduates/index.vue';

export default MainVue.extend({
  name: 'LandingPage',
  components: {
    Banner, Opportunities, Courses, Graduates,
  },
});
</script>

<style lang="scss" scoped>
.landing {
  height: max-content;
  position: relative;
}
</style>
