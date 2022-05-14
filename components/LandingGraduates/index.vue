<template>
  <div id="landing-graduates" class="graduates">
    <h2 class="graduates__title graduates__title_h2">
      {{ $t("graduates.title") }}
    </h2>
    <Flicking
      class="graduates__carousel"
      hide-before-init
      :options="{
        circular: true,
        panelsPerView: 1,
        autoResize: true
      }"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        class="graduates__slide"
      >
        <div class="graduates__content">
          <img
            class="graduates__avatar"
            :src="card.img"
            alt="image slot"
          >
          <h3 class="graduates__name">
            {{ $t(card.name) }}
          </h3>
          <div class="graduates__description">
            <div class="graduates__underline" />
            <p class="graduates__text">
              {{ $t(card.text) }}
            </p>
            <div class="graduates__underline graduates__underline_bottom" />
          </div>
        </div>
      </div>
    </Flicking>
  </div>
</template>

<script lang="ts">
import { Flicking } from '@egjs/vue-flicking';
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'LandingOpportunities',
  components: { Flicking },
  data() {
    return {
      cards: [
        {
          id: 1,
          name: 'graduates.cards.graduate1.name',
          text: 'graduates.cards.graduate1.text',
          img: require('~/assets/img/graduates/graduate_1.png'),
        },
        {
          id: 2,
          name: 'graduates.cards.graduate2.name',
          text: 'graduates.cards.graduate2.text',
          img: require('~/assets/img/graduates/graduate_2.png'),
        },
        {
          id: 3,
          name: 'graduates.cards.graduate3.name',
          text: 'graduates.cards.graduate3.text',
          img: require('~/assets/img/graduates/graduate_3.png'),
        },
        {
          id: 4,
          name: 'graduates.cards.graduate4.name',
          text: 'graduates.cards.graduate4.text',
          img: require('~/assets/img/graduates/graduate_4.png'),
        },
        {
          id: 5,
          name: 'graduates.cards.graduate5.name',
          text: 'graduates.cards.graduate5.text',
          img: require('~/assets/img/graduates/graduate_5.png'),
        },
        {
          id: 6,
          name: 'graduates.cards.graduate6.name',
          text: 'graduates.cards.graduate6.text',
          img: require('~/assets/img/graduates/graduate_6.png'),
        },
        {
          id: 7,
          name: 'graduates.cards.graduate7.name',
          text: 'graduates.cards.graduate7.text',
          img: require('~/assets/img/graduates/graduate_7.png'),
        },
        {
          id: 8,
          name: 'graduates.cards.graduate8.name',
          text: 'graduates.cards.graduate8.text',
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
  padding: 100px 0;
  &__title {
    @include title;
    margin-bottom: 40px;
    text-align: center;
  }
  &__carousel {
    display: flex;
    width: 100%;
  }
  &__slide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 70px;
    border-radius: 12px;
    overflow: hidden;
  }
  &__content {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    background-color: $white;
    border-radius: 12px;
    padding: 70px 50px 50px 50px;
    box-sizing: border-box;
    height: 100%;
  }
  &__name {
    color: $black;
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 15px;
    text-align: center;
  }
  &__description {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    //justify-content: space-between;
  }
  &__underline {
    width: 100%;
    height: 1px;
    min-height: 1px;
    margin-bottom: 15px;
    background-color: rgba(0,0,0,0.3);
    border-radius: 24px;
    &_bottom {
      margin-bottom: unset;
      margin-top: 15px;
    }
  }
  &__text {
    @include text;
    color: $black;
    text-indent: 35px;
    display: flex;
    flex-grow: 1;
    align-items: center;
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
  @include _1300 {
    &__content {
      max-width: 90%;
    }

  }
  @include _767 {
    padding: 50px 0;
    &__slide {
      align-items: flex-start;
      padding-top: 60px;
    }
    &__content {
      height: max-content;
      padding-top: 50px;
    }
    &__title {
      margin-bottom: 30px;
    }
    &__name {
      font-size: 24px;
      line-height: 26px;
    }
    &__text {
      align-items: flex-start;
    }
    &__avatar {
      width: 100px;
      height: 100px;
      top: -60px;
    }
  }
  @include _480 {
    padding: 30px 0;
    &__title {
      margin-bottom: 20px;
    }
    &__slide {
      padding-top: 50px;
    }
    &__content {
      padding: 40px 30px 40px 30px;
    }
    &__name {
      font-size: 18px;
      line-height: 20px;
    }
    &__text {
      text-indent: 20px;
    }
    &__avatar {
      width: 80px;
      height: 80px;
      top: -50px;
    }
  }
}

</style>
