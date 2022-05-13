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
        // circular: true,
        defaultIndex: centralElementIndex,
        bound: true
      }"
    >
      <li v-for="card in cards" :key="card.id" class="courses__card card">
        <div class="card__top">
          <div class="card__shadow" />
          <img alt="card_img" :src="card.img" class="card__img">
          <h3 class="card__title">
            {{ card.title }}
          </h3>
        </div>
        <div class="card__bottom">
          <p class="card__text card__text_sm">
            {{ card.text }}
          </p>
          <div class="card__info">
            <div v-for="period in info" :key="period.id" class="card__period">
              <img class="card__icon" :src="period.img" alt="clock">
              <p class="card__value card__value_xs">
                {{ card[period.key] }} {{ period.unit }}
              </p>
            </div>
          </div>
          <base-button>{{ $t("courses.learn-more") }}</base-button>
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
          title: 'Frontend разработчик',
          text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
          img: require('~/assets/img/courses/test_1.png'),
          hours: 450,
          classes: 90,
        },
        {
          id: 1,
          title: 'Backend разработчик',
          text: 'Entry level cyber security course intended for an audience looking tontry level cyber security course intended for an audience looking tontry level cyber security course intended for an audience looking tontry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
          img: require('~/assets/img/courses/test_2.png'),
          hours: 500,
          classes: 100,
        },
        {
          id: 2,
          title: 'Blockchain разработчик',
          text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
          img: require('~/assets/img/courses/test_3.png'),
          hours: 200,
          classes: 40,
        },
        // {
        //   id: 3,
        //   title: 'Blockchain разработчик',
        //   text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
        //   img: require('~/assets/img/courses/test_3.png'),
        //   hours: 200,
        //   classes: 40,
        // },
        // {
        //   id: 4,
        //   title: 'Blockchain разработчик',
        //   text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
        //   img: require('~/assets/img/courses/test_3.png'),
        //   hours: 200,
        //   classes: 40,
        // },
        // {
        //   id: 5,
        //   title: 'Blockchain разработчик',
        //   text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
        //   img: require('~/assets/img/courses/test_3.png'),
        //   hours: 200,
        //   classes: 40,
        // },
        // {
        //   id: 6,
        //   title: 'Blockchain разработчик',
        //   text: 'Entry level cyber security course intended for an audience looking to make a career change, or alternatively for those wishing to enter the world of cyber and information security. Students in the course will be exposed to a whole range of topics and methods of defense and attack in the cyber world and practice the material with tools that simulate what happens in the real world, tools required for the ongoing work of modern cyber security person in a changing world.',
        //   img: require('~/assets/img/courses/test_3.png'),
        //   hours: 200,
        //   classes: 40,
        // },
      ],
      info: [
        {
          id: 0,
          unit: this.$t('courses.info.hours'),
          img: require('~/assets/img/courses/clock.svg'),
          key: 'hours',
        },
        {
          id: 1,
          unit: this.$t('courses.info.classes'),
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

<style lang="scss">
@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");
@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");
.courses {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px 50px 50px;
  background-image: linear-gradient( rgba(30, 30, 30, 0.6), rgba(30, 30, 30, 0.6)), url("~/assets/img/courses.png");
  background-size: cover;
  background-repeat: no-repeat;
  &__title {
    @include title;
    margin-bottom: 20px;
    color: #FFFFFF;
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

    //display: grid;
    //grid-column-gap: 20px;
    //grid-row-gap: 25px;
    //grid-template-columns: repeat(auto-fit, 320px);
    //justify-content: center;
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
      font-size: 29px;
      line-height: 31px;
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
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__period {
      display: flex;
      align-items: center;
      flex-grow: 1;
      overflow: hidden;
    }
    &__icon {
      max-width: 20px;
      max-height: 20px;
      margin-right: 15px;
    }
    &__value {
      @include text;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
