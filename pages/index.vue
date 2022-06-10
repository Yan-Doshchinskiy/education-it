<template>
  <div class="landing">
    {{ posts }}
    <div id="landing" class="landing__anchor" />
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
import { getPosts } from '~/api';

export default MainVue.extend({
  name: 'LandingPage',
  components: {
    Banner, Opportunities, Courses, Graduates,
  },
  data() {
    return {
      posts: [],
    };
  },
  async asyncData() {
    const posts = await getPosts();
    return { posts };
  },
  // async created() {
  //   this.posts = await getPosts();
  // },
});
</script>

<style lang="scss" scoped>
.landing {
  height: max-content;
  position: relative;
  &__anchor {
    position: absolute;
    top: 0;
  }
}

</style>
