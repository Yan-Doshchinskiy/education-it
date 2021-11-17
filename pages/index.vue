<template>
  <div class="example">
    123
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue'

export default MainVue.extend({
  data: () => ({
    test: ''
  })
})
</script>

<style lang="scss" scoped>
.example {
  @include container;
}
</style>
