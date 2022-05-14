<template>
  <footer id="footer" class="footer">
    <p class="footer__copyright">
      © 2019 Kernelios Ltd.  All rights reserved. Kernelios, the Kernelios logo, Simulating Cyber Threats, Training Today’s Leaders For Tomorrow’s Threats and combinations thereof are trademarks of Kernelios Ltd.
    </p>
  </footer>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'Footer',
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 80%;
  justify-content: center;
  background-color: $footer-bg;
  padding: 40px 0;
  &__copyright {
    @include text;
    display: flex;
    flex-direction: column;
    color: $black-300;
  }
  @include  _767 {
    grid-template-columns: 90%;
  }
  @include  _480 {
    padding: 30px 0;
  }
}
</style>
