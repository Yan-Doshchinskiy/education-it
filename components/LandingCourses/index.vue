<template>
  <div id="landing-courses" class="courses">
    <h2 class="courses__title courses__title_h2">
      {{ $t("courses.title") }}
    </h2>
    <Flicking
      v-if="cards.length"
      class="courses__list"
      hide-before-init
      :options="{
        defaultIndex: centralElementIndex,
        bound: true
      }"
    >
      <li v-for="card in cards" :key="card.id" class="courses__card card">
        <div class="card__top">
          <div class="card__shadow" />
          <img alt="card_img" :src="card.img" class="card__img">
          <h3 class="card__title">
            {{ $t(card.title) }}
          </h3>
        </div>
        <div class="card__bottom">
          <p class="card__text card__text_sm">
            {{ $t(card.text) }}
          </p>
          <div class="card__info">
            <div v-for="period in info" :key="period.id" class="card__period">
              <img class="card__icon" :src="period.img" alt="clock">
              <p class="card__value card__value_xs">
                {{ card[period.key] }} {{ $t(period.unit) }}
              </p>
            </div>
          </div>
          <base-button class="card__button">
            {{ $t("courses.learn-more") }}
          </base-button>
        </div>
      </li>
    </Flicking>
    <h2 v-else class="courses__empty courses__empty_h2">
      {{ $t("courses.empty") }}
    </h2>
  </div>
</template>

<script lang="ts">
import { Flicking } from '@egjs/vue-flicking';
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'LandingCourses',
  components: { Flicking },
  data() {
    return {
      cards: [
        {
          id: 0,
          title: 'courses.cards.frontend.title',
          text: 'courses.cards.frontend.text',
          img: require('~/assets/img/courses/test_1.png'),
          hours: 450,
          classes: 90,
        },
        {
          id: 1,
          title: 'courses.cards.backend.title',
          text: 'courses.cards.backend.text',
          img: require('~/assets/img/courses/test_2.png'),
          hours: 500,
          classes: 100,
        },
        {
          id: 2,
          title: 'courses.cards.blockchain.title',
          text: 'courses.cards.blockchain.text',
          img: require('~/assets/img/courses/test_3.png'),
          hours: 200,
          classes: 40,
        },
        {
          id: 3,
          title: 'courses.cards.frontend.title',
          text: 'courses.cards.frontend.text',
          img: require('~/assets/img/courses/test_1.png'),
          hours: 450,
          classes: 90,
        },
        {
          id: 4,
          title: 'courses.cards.backend.title',
          text: 'courses.cards.backend.text',
          img: require('~/assets/img/courses/test_2.png'),
          hours: 500,
          classes: 100,
        },
        {
          id: 5,
          title: 'courses.cards.blockchain.title',
          text: 'courses.cards.blockchain.text',
          img: require('~/assets/img/courses/test_3.png'),
          hours: 200,
          classes: 40,
        },
      ],
      info: [
        {
          id: 0,
          unit: 'courses.info.hours',
          img: require('~/assets/img/courses/clock.svg'),
          key: 'hours',
        },
        {
          id: 1,
          unit: 'courses.info.classes',
          img: require('~/assets/img/courses/calendar.svg'),
          key: 'classes',
        },
      ],
    };
  },
  computed: {
    centralElementIndex():number {
      return Math.floor(this.cards.length / 2);
    },
  },
});
</script>

<style lang="scss" scoped>
.courses {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 50px 0;
  background-image: linear-gradient( rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.6)), url("~/assets/img/courses.png");
  background-size: cover;
  background-repeat: no-repeat;
  &__title {
    @include title;
    margin-bottom: 40px;
    color: #FFFFFF;
    text-align: center;
  }
  &__empty {
    @include title;
    color: white;
    padding: 300px 100px;
    background-color: rgba(100,100,100, 0.4);
    border-radius: 12px;
  }
  &__list {
    width: 100%;
    padding: 0 20px;
  }
  &__card {
    border-radius: 12px;
    overflow: hidden;
    background-color: white;
    border: 0;
    width: 320px;
    margin-right: 20px;
  }
  .card {
    &__top {
      width: 100%;
      position: relative;

    }
    &__shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: rgba(0,0,0,0.5);
    }
    &__img {
      min-height: 100%;
      min-width: 100%;
      max-height: 100%;
      max-width: 100%;
    }
    &__title {
      @include title;
      color: #FFFFFF;
      position: absolute;
      bottom: 15px;
      left: 15px;
      z-index: 3;
      font-size: 28px;
      line-height: 30px;
    }
    &__bottom {
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    &__text {
      @include text;
      margin-bottom: 40px;

      display: -webkit-box;
      -webkit-line-clamp: 14;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__info {
      width: 100%;
      margin-bottom: 20px;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      grid-gap: 10px;
    }
    &__period {
      display: grid;
      grid-template-columns: 20px 1fr;
      grid-gap: 15px;
      align-items: center;
    }
    &__icon {
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      height: 100%;
    }
    &__value {
      @include text;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  @include _767 {
    padding: 50px 0;
    &__title {
      margin-bottom: 30px;
    }
    &__card {
      width: 240px;
    }
    .card {
      &__title {
        font-size: 24px;
        line-height: 26px;
      }
      &__text {
        -webkit-line-clamp: 8;
        margin-bottom: 15px;
      }
      &__info {
        margin-bottom: 15px;
      }
      &__period {
        grid-template-columns: 15px 1fr;
      }
      &__button {
        font-size: 12px;
        line-height: 14px;
        height: 30px;
      }
    }
  }
}
</style>
