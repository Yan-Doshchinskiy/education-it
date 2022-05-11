<template>
  <div id="landing-opportunities" class="opportunities">
    <h2 class="opportunities__title opportunities__title_h2">
      {{ $t("opportunities.title") }}
    </h2>
    <h3 class="opportunities__subtitle opportunities__subtitle_h3">
      {{ $t("opportunities.subtitle") }}
    </h3>
    <ul class="opportunities__list">
      <li v-for="card in cards" :key="card.id" class="opportunities__card">
        <div class="opportunities__circle">
          <img class="opportunities__img" :src="card.img" alt="opportunities img">
        </div>
        <button class="opportunities__btn">
          <span class="opportunities__text opportunities__text_h3">
            {{ card.text }}
          </span>
        </button>
      </li>
    </ul>
    <p class="opportunities__description">
      {{ $t("opportunities.description") }}
    </p>
  </div>
</template>

<script lang="ts">
import MainVue from '~/mixins/MainVue';

export default MainVue.extend({
  name: 'LandingOpportunities',
  data() {
    return {
      cards: [
        {
          id: 0,
          text: this.$t('opportunities.cards.option1'),
          img: require('~/assets/img/opportunities/test_1.svg'),
        },
        {
          id: 1,
          text: this.$t('opportunities.cards.option2'),
          img: require('~/assets/img/opportunities/test_2.svg'),
        },
        {
          id: 2,
          text: this.$t('opportunities.cards.option3'),
          img: require('~/assets/img/opportunities/test_3.svg'),
        },
        {
          id: 3,
          text: this.$t('opportunities.cards.option4'),
          img: require('~/assets/img/opportunities/test_4.svg'),
        },
        {
          id: 4,
          text: this.$t('opportunities.cards.option5'),
          img: require('~/assets/img/opportunities/test_5.svg'),
        },
        {
          id: 6,
          text: this.$t('opportunities.cards.option6'),
          img: require('~/assets/img/opportunities/test_7.svg'),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.opportunities {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px;

  &__title {
    @include title;
    margin-bottom: 20px;
  }

  &__subtitle {
    @include title;
    margin-bottom: 50px;
  }

  &__list {
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    column-gap: 20px;
    row-gap: 25px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__card {
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 25px;
    transition: $transition_main;
    row-gap: 25px;
    -webkit-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
    box-shadow: 2px 2px 14px 2px rgba(0, 0, 0, 0.08);
  }

  &__circle {
    width: 74px;
    height: 74px;
    min-width: 74px;
    min-height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: black;
    transition: $transition-main;
  }

  &__img {
    width: 42px;
    height: 42px;
    min-width: 42px;
    min-height: 42px;
    transition: $transition-main;
  }

  &__btn {
    position: relative;
    transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
    user-select: none;
    padding: 10px 15px;
    border-radius: 12px;
    &:before, &:after {
      content: '';
      position: absolute;
      transition: inherit;
      top: 0;
      width: 0;
      height: 100%;
      z-index: 1;
    }
    &:before {
      left: 6px;
      border: 1px solid $black;
      border-left: 0;
      border-right: 0;

    }
    &:after {
      right: 0;
      border-radius: 6px;
    }
    &:hover {
      transition-delay: .3s;
      &:before {
        transition-delay: 0s;
        width: calc(100% - 12px);
      }

      &:after {
        background: black;
        transition-delay: .15s;
        width: 100%;

      }
      .opportunities__text {
        color: white;
        transition-delay: .5s;

      }
    }
  }
  &__text {
    @include title;
    position: relative;
    text-align: center;
    color: black;
    z-index: 2;
    transition-delay: .2s;
  }
  &__description {
    @include text;
    width: 50%;
    text-align: center;
  }
  @include _767 {
    padding: 50px 20px;
    &__card {
      padding: 15px;
      row-gap: 15px;
      width: unset;
    }
    &__circle {
      width: 54px;
      height: 54px;
      min-width: 54px;
      min-height: 54px;
    }
    &__img {
      width: 29px;
      height: 29px;
      min-width: 29px;
      min-height: 29px;
    }
    &__title {
      width: 100%;
      text-align: center;
    }

    &__subtitle {
      width: 100%;
      text-align: center;
    }
  }

  @include _480 {
    padding: 30px 20px;
    &__list {
      row-gap: 15px;
      column-gap: 12px;
      margin-bottom: 25px;

    }
    &__subtitle {
      margin-bottom: 25px;
    }
  }
  @include _380 {
    &__card {
      width: 100%;
      flex-direction: row;
      column-gap: 10px;
    }
    &__circle {
      width: 38px;
      height: 38px;
      min-width: 38px;
      min-height: 38px;
    }
    &__img {
      width: 21px;
      height: 21px;
      min-width: 21px;
      min-height: 21px;
    }
    &__btn {
      flex-grow: 1;
      height: 38px;
      font-size: 10px;
      line-height: 12px;
    }
  }
}

</style>
