<template>
  <div>
    <Header />
    <main class="Layout-content">
      <picture>
        <source media="(max-width: 768px)" srcset="@/assets/images/layout-background-top-237w.png" />
        <source media="(min-width: 769px)" srcset="@/assets/images/layout-background-top-334w.png" />
        <img
          class="Layout-content__decoration Layout-content__decoration--top"
          src="@/assets/images/layout-background-top-334w.png"
          width="334"
          height="855"
          alt="Blurred circle"
        />
      </picture>
      <picture>
        <source media="(max-width: 768px)" srcset="@/assets/images/layout-background-bottom-218w.png" />
        <source media="(min-width: 769px)" srcset="@/assets/images/layout-background-bottom-417w.png" />
        <img
          class="Layout-content__decoration Layout-content__decoration--bottom"
          src="@/assets/images/layout-background-bottom-417w.png"
          width="417"
          height="431"
          alt="Blurred circle"
        />
      </picture>
      <div class="Layout-content__container">
        <section class="Intro-section">
          <Heading class="Intro-section__title" :level="3">
            <picture class="Intro-section__title-image-box">
              <img
                class="Intro-section__title-image"
                src="@/assets/images/hand-emoji.png"
                srcset="@/assets/images/hand-emoji-@2x.png 2x, @/assets/images/hand-emoji.png 1x"
                width="36"
                height="45"
                alt="Sign of the horns"
              >
            </picture>
            Володарі Трафіку
            <picture class="Intro-section__title-image-box">
              <img
                class="Intro-section__title-image"
                src="@/assets/images/hand-emoji.png"
                srcset="@/assets/images/hand-emoji-@2x.png 2x, @/assets/images/hand-emoji.png 1x"
                width="36"
                height="45"
                alt="Sign of the horns"
              >
            </picture>
          </Heading>
          <Text class="Intro-section__text">
            SC Partners – нова партнерська мережа з величезним досвідом та експертизою. Кожен наш партнер отримує
            очікувану вигоду на абсолютно прозорих умовах та бездоганний супровід. Ми будемо поряд з вами: на
            відстані одного повідомлення в месенджері або дзвінка, адже ми працюємо поряд з вами.
          </Text>
          <div class="Intro-section__stars">
            <BaseIcon
              class="Intro-section__star"
              v-for="index in 5"
              :key="index"
              name="star"
            />
          </div>
        </section>

        <section class="Features-section">
          <Heading class="Features-section__title" :level="4">Тим, хто нагоняє Траф</Heading>

          <div class="Features-section__items">
            <div v-for="feature in features" class="Features-section__item">
              <span class="Features-section__item-icon">
                <BaseIcon :name="feature.icon" />
              </span>
              <div class="Features-section__item-content">
                <Text class="Features-section__item-text" variant="body-bold"><span v-html="feature.text"></span></Text>
                <Text class="Features-section__item-caption"><span v-html="feature.caption"></span></Text>
              </div>
            </div>
          </div>
        </section>

        <Modal name="auth" v-show="showModal.auth" />
        <Modal name="register" v-show="showModal.register" />
      </div>
    </main>
  </div>
</template>

<script>
import BaseIcon from './components/Icons/BaseIcon';
import Heading from './components/Typography/Heading';
import Text from './components/Typography/Text';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

export default {
  components: { Modal, Button, Text, Heading, BaseIcon },

  data() {
    return {
      features: {
        0: {
          icon: 'megaphone',
          text: 'Круті акції, призи та прибуткова бонусна програма',
          caption: 'Ми постійно працюємо над тим, щоб вам було цікаво та вигідно!',
        },
        1: {
          icon: 'smile',
          text: 'Особлива підтримка <br /> для кожного 24/7',
          caption: 'У вас буде свій персональний менеджер',
        },
        2: {
          icon: 'chart',
          text: 'Детальна <br /> статистика',
          caption: 'Миттєве оновлення, зрозуміла система відображення статистики',
        },
      },
      showModal: {
        auth: false,
        register: false,
      },
    }
  },
}
</script>

<style lang="scss">
  body {
    min-height: 100vh;
    background-color: #141416;
  }

  .Layout-content {
    position: relative;
    padding: rem(100) 0;
    overflow-x: hidden;

    &__decoration {
      position: absolute;
      z-index: -1;
      pointer-events: none;

      &--top {
        top: rem(-50);
        right: 0;
      }

      &--bottom {
        left: 0;
        bottom: 0;
      }

      @include mq('tablet-small') {
        width: auto;
        height: auto;

        &--bottom {
          bottom: rem(300);
        }
      }
    }

    &__container {
      max-width: rem(1230);
      margin: 0 auto;
      padding: 0 rem(15);

      @include mq('tablet-small') {
        display: flex;
        flex-direction: column-reverse;
      }
    }

    @include mq('tablet-small') {
      padding: rem(50) 0;
    }
  }

  .Intro-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: rem(900);
    margin: 0 auto rem(125);
    padding: rem(39) rem(40);
    background: rgba($Color--gray-700, 0.5) url("@/assets/images/graph.svg") center / 100% rem(182) no-repeat;
    border-radius: rem(24);
    overflow: hidden;

    &__title {
      display: flex;
      align-items: center;
      margin-bottom: rem(25);
      color: $Color--gray-200;
    }

    &__title-image-box {
      margin: 0 rem(25);

      &:last-of-type {
        transform: scaleX(-1);
      }
    }

    &__text {
      margin-bottom: rem(25);
      color: $Color--gray-500;
      text-align: center;
    }

    &__stars {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__star {
      margin-right: rem(25);
      color: $Color--gray-600;
      font-size: rem(15);

      &:last-child {
        margin-right: 0;
      }
    }

    @include mq('tablet-small') {
      margin-bottom: 0;
      padding: rem(24);

      &__title-image-box {
        margin: 0 rem(10);
      }

      &__title-image {
        width: rem(20);
        height: auto;
      }
    }
  }

  .Features-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__title {
      margin-bottom: rem(75);
      color: $Color--gray-200;
    }

    &__items {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: rem(345);
      width: 100%;
      padding: 0 rem(15);
      text-align: center;
    }

    &__item-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: rem(65);
      height: rem(65);
      margin-bottom: rem(25);
      color: $Color--gray-600;
      font-size: rem(35);
      border-radius: rem(15);
      background-color: $Color--primary-yellow;
    }

    &__item-text {
      max-width: rem(250);
      margin: 0 auto rem(25);
    }

    &__item-caption {
      color: $Color--gray-500;
    }

    @include mq('tablet-small') {
      &__title {
        margin-bottom: rem(35);
      }

      &__items {
        flex-direction: column;
        align-items: center;
        margin-bottom: rem(25);
        padding: 0 rem(15);
      }

      &__item {
        flex-direction: row;
        max-width: rem(315);
        margin-bottom: rem(25);
        text-align: left;
        padding: 0;
      }

      &__item-icon {
        width: rem(45);
        height: rem(45);
        margin-bottom: 0;
        margin-right: rem(25);
        font-size: rem(25);
      }

      &__item-text {
        max-width: none;
        margin-bottom: rem(5);

        br {
          display: none;
        }
      }
    }
  }
</style>
