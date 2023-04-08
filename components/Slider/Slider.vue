<template>
  <div class="Slider">
    <div class="Slider__slides">
      <div class="Slider__slide Slider__slide--active">
        <Text class="Slider__title">Зможеш обрати свій варіант</Text>

        <div class="Slider__features">
          <div class="Slider__features-item" v-for="feature in features">
        <span class="Slider__features-item-icon-box">
          <BaseIcon class="Slider__features-item-icon" name="check"></BaseIcon>
        </span>
            <span class="Slider__features-item-content">
          <Text class="Slider__features-item-title">{{ feature.title }}</Text>
          <Text class="Slider__features-item-text">{{ feature.text }}</Text>
        </span>
          </div>
        </div>
      </div>
      <div class="Slider__slide">
        <Text class="Slider__title">Зможеш обрати свій варіант</Text>

        <div class="Slider__features">
          <div class="Slider__features-item" v-for="feature in features">
        <span class="Slider__features-item-icon-box">
          <BaseIcon class="Slider__features-item-icon" name="check"></BaseIcon>
        </span>
            <span class="Slider__features-item-content">
          <Text class="Slider__features-item-title">{{ feature.title }}</Text>
          <Text class="Slider__features-item-text">{{ feature.text }}</Text>
        </span>
          </div>
        </div>
      </div>
    </div>

    <div class="Slider__controls-box">
      <button class="Slider__controls-arrow Slider__controls-arrow--prev">
        <BaseIcon class="Slider__controls-arrow-icon" name="arrow" />
      </button>
      <div class="Slider__controls-dots">
        <button class="Slider__controls-dot Slider__controls-dot--active"></button>
        <button class="Slider__controls-dot"></button>
        <button class="Slider__controls-dot"></button>
      </div>
      <button class="Slider__controls-arrow Slider__controls-arrow--next">
        <BaseIcon class="Slider__controls-arrow-icon" name="arrow" />
      </button>
    </div>
  </div>
</template>
<script>
import Text from '../Typography/Text';
import BaseIcon from '../Icons/BaseIcon';

export default {
  components: { BaseIcon, Text },

  data() {
    return {
      features: {
        0: {
          title: 'CPA',
          text: '$25 і вище',
        },
        1: {
          title: 'REVSHARE',
          text: 'Піднімай до 60%',
        },
        2: {
          title: 'Гібрід',
          text: 'Зробимо як скажеш',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
  .Slider {
    $Feature_icon--size: rem(45);

    position: relative;
    display: flex;
    flex-direction: column;
    font-family: $Font-Gilroy;
    color: $Color--gray-100;
    background: url("@/assets/images/lines-background.svg") center bottom no-repeat;

    &::before {
      position: absolute;
      top: rem(-14);
      left: 0;
      width: 100%;
      height: rem(182);
      background: url("@/assets/images/graph.svg") left no-repeat;
      filter: brightness(0) invert(1);
      pointer-events: none;
      content: '';
    }

    &__slides {
      overflow-y: auto;
    }

    &__slide {
      display: none;
      padding: rem(65) rem(53) rem(20);

      &--active {
        display: block;
      }
    }

    &__title {
      font-family: $Font-Gilroy--light;
      margin-bottom: rem(65);
      color: $Color--gray-100;
      font-size: rem(25);
      line-height: rem(40);
    }

    &__features-item {
      display: flex;
      align-items: center;
      margin-bottom: rem(25);
    }

    &__features-item-icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: $Feature_icon--size;
      height: $Feature_icon--size;
      margin-right: rem(25);
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
    }

    &__features-item-icon {
      font-size: rem(24);
    }

    &__features-item-title {
      font-family: $Font-Gilroy--bold;
      color: inherit;
      font-weight: 700;
      font-size: rem(14);
      line-height: rem(16);
    }

    &__features-item-text {
      font-family: $Font-Gilroy--regular;
      color: inherit;
      font-size: rem(14);
      line-height: rem(24);
    }

    &__controls-box {
      //position: absolute;
      //bottom: rem(107);
      //left: 50%;
      //transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: rem(107);
      padding-top: rem(20);
    }

    &__controls-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 rem(5);
      color: $Color--gray-300;
      font-size: rem(16);
      transition: opacity $Transition--time;

      @include hover {
        opacity: 0.7;
      }

      &--next {
        transform: rotate(180deg);
      }
    }

    &__controls-dots {
      display: flex;
      align-items: center;
    }

    &__controls-dot {
      position: relative;
      width: rem(18);
      height: rem(18);
      transition: opacity $Transition--time;

      &:not(&--active) {
        @include hover {
          opacity: 0.7;
        }
      }

      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: rem(8);
        height: rem(8);
        background-color: $Color--gray-300;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        content: '';
      }

      &--active::after {
        background-color: $Color--primary-yellow;
      }
    }
  }
</style>