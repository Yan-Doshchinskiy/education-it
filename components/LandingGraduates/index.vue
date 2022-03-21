<template>
  <div class="graduates">
    <h2 class="graduates__title graduates__title_h2">
      {{ $t("graduates.title") }}
    </h2>
    <b-carousel
      v-model="slide"
      class="graduates__carousel"
      :interval="5000"
      :no-hover-pause="false"
    >
      <b-carousel-slide
        v-for="card in cards"
        :key="card.id"
        slot="default"
        class="graduates__slide"
        img-blank
        draggable="true"
      >
        <template #default>
          <div class="graduates__content">
            <img
              class="graduates__avatar"
              :src="card.img"
              alt="image slot"
            >
            <h3 class="graduates__name">
              {{ card.name }}
            </h3>
            <div class="graduates__underline" />
            <p class="graduates__text">
              {{ card.text }}
            </p>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'LandingOpportunities',
  data() {
    return {
      slide: 0,
      cards: [
        {
          id: 1,
          name: this.$t('graduates.cards.graduate1.name'),
          text: this.$t('graduates.cards.graduate1.text'),
          img: require('~/assets/img/graduates/graduate_1.png'),
        },
        {
          id: 2,
          name: this.$t('graduates.cards.graduate2.name'),
          text: this.$t('graduates.cards.graduate2.text'),
          img: require('~/assets/img/graduates/graduate_2.png'),
        },
        {
          id: 3,
          name: this.$t('graduates.cards.graduate3.name'),
          text: this.$t('graduates.cards.graduate3.text'),
          img: require('~/assets/img/graduates/graduate_3.png'),
        },
        {
          id: 4,
          name: this.$t('graduates.cards.graduate4.name'),
          text: this.$t('graduates.cards.graduate4.text'),
          img: require('~/assets/img/graduates/graduate_4.png'),
        },
        {
          id: 5,
          name: this.$t('graduates.cards.graduate5.name'),
          text: this.$t('graduates.cards.graduate5.text'),
          img: require('~/assets/img/graduates/graduate_5.png'),
        },
        {
          id: 6,
          name: this.$t('graduates.cards.graduate6.name'),
          text: this.$t('graduates.cards.graduate6.text'),
          img: require('~/assets/img/graduates/graduate_6.png'),
        },
        {
          id: 7,
          name: this.$t('graduates.cards.graduate7.name'),
          text: this.$t('graduates.cards.graduate7.text'),
          img: require('~/assets/img/graduates/graduate_7.png'),
        },
        {
          id: 8,
          name: this.$t('graduates.cards.graduate8.name'),
          text: this.$t('graduates.cards.graduate8.text'),
          img: require('~/assets/img/graduates/graduate_8.png'),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.graduates {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;
  &__title {
    @include title;
  }
  &__carousel {
    display: grid;
    width: 90%;
    grid-template-columns: 1fr;
  }
  &__slide {
    width: 100%;
    height: 450px;
    border-radius: 12px;
    overflow: hidden;
  }
  &__content {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background-color: $white;
    border-radius: 12px;
    padding: 70px 50px 50px 50px;
    box-sizing: border-box;
  }
  &__name {
    color: $black;
    margin-bottom: 15px;
  }
  &__underline {
    width: 90%;
    height: 1px;
    min-height: 1px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 24px;
  }
  &__text {
    color: $black;
  }
  &__avatar {
    position: absolute;
    top: -70px;
    align-self: center;
    justify-self: center;
    object-fit: cover;
    display: flex;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    overflow: hidden;
    background-color: $white;
  }
}

</style>
