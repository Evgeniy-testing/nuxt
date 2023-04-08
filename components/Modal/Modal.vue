<template>
  <div
    class="Modal"
    :class="['Modal-' + name]"
  >
    <div class="Modal__pall" @click="this.$parent.showModal[name] = false"></div>

    <!--    AUTH-->
    <div class="Modal__content" v-if="name === 'auth'">
      <div class="Modal__content-panel Modal__content-main">
        <button class="Modal__close-button" @click="this.$parent.showModal[name] = false">
          <BaseIcon class="Modal__close-icon" name="close" />
        </button>
        <div class="Modal__header">
          <span class="Modal__header-icon-box Modal__header-icon-box--orange">
            <BaseIcon class="Modal__header-icon" name="lock" />
          </span>
          <Text class="Modal__header-title" component="span">Вхід</Text>
        </div>
        <div class="Modal__form">
          <Input class="Modal__field" id="emailf" label="" placeholder="Ваш email" />
          <Input class="Modal__field" id="passwordf" label="" type="password" placeholder="Ваш пароль" />
          <Button class="Modal__submit" size="md">Війти</Button>
        </div>
      </div>
    </div>

    <!--    REGISTRATION-->
    <div class="Modal__content" v-if="name === 'register'">
      <div class="Modal__content-panel Modal__content-slider">
        <Slider />
      </div>

      <div class="Modal__content-panel Modal__content-main">
        <button class="Modal__close-button" @click="this.$parent.showModal[name] = false">
          <BaseIcon class="Modal__close-icon" name="close" />
        </button>
        <div class="Modal__header Modal__header--column">
          <span class="Modal__header-icon-box Modal__header-icon-box--green">
            <BaseIcon class="Modal__header-icon" name="user" />
          </span>
          <Text class="Modal__header-title" component="span">Реєстрація</Text>
        </div>
        <div class="Modal__form">
          <Input class="Modal__field" id="register_name" label="" placeholder="Ваше імʼя" success />
          <Input class="Modal__field" id="register_email" label="" placeholder="Ваш email" error />
          <Input class="Modal__field" id="register_password" label="" type="password" placeholder="Ваш пароль" />
          <Input class="Modal__field" id="register_password-repeat" label="" type="password" placeholder="Повторіть пароль" />

          <div class="Modal__feedback">
            <Text class="Modal__feedback-title">Оберіть спосіб звязку</Text>

            <div class="Modal__feedback-content">
              <div class="Modal__feedback-messengers">
                <label class="Modal__feedback-messenger">
                  <input class="Modal__feedback-radio" type="radio" name="register_messenger" checked>
                  <span class="Modal__feedback-radio-virtual">
                    <BaseIcon name="telegram" />
                  </span>
                </label>
                <label class="Modal__feedback-messenger">
                  <input class="Modal__feedback-radio" type="radio" name="register_messenger">
                  <span class="Modal__feedback-radio-virtual">
                    <BaseIcon name="skype" />
                  </span>
                </label>
              </div>

              <Input class="Modal__field" id="register_feedback" label="" placeholder="@телеграм_адреса" />
            </div>
          </div>

          <Button class="Modal__submit" size="md">Реєстрація</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '../Icons/BaseIcon';
import Text from '../Typography/Text';
import Slider from '../Slider/Slider';

export default {
  components: { Slider, Text, BaseIcon },

  props: {
    name: String,
  },
}
</script>

<style lang="scss">
  .Modal {
    $Close-button--size: rem(40);

    position: fixed;
    top: 0;
    left: 0;

    @include z-index(modal);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: rem(10);

    &__pall {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($Color--gray-600, 0.9);
    }

    &__content {
      position: relative;
      display: flex;
      justify-content: center;
      max-height: 90vh;
      width: 100%;
    }

    &__content-panel {
      width: 100%;
      border-top-left-radius: rem(25);
      border-bottom-left-radius: rem(25);
      overflow-y: auto;

      & + .Modal__content-panel {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        @include mq('tablet-small') {
          border-radius: rem(25);
        }
      }
    }

    &__content-slider {
      display: flex;
      max-width: rem(385);
      width: 100%;
      background-color: $Color--primary-green;

      // Instead of @media should be a condition on JS to prevent render
      @include mq('tablet-small') {
        display: none;
      }
    }

    &__content-main {
      position: relative;
      padding: rem(25) rem(30);
      background-color: rgba($Color--gray-700, 0.95);
      border-radius: rem(25);
    }

    &__close-button {
      position: absolute;
      top: rem(10);
      right: rem(10);
      display: flex;
      align-items: center;
      justify-content: center;
      width: $Close-button--size;
      height: $Close-button--size;
      background-color: $Color--gray-600;
      border-radius: 50%;
      transition: opacity $Transition--time;

      @include hover {
        opacity: 0.5;
      }
    }

    &__close-icon {
      color: $Color--gray-500;
      font-size: rem(24);
    }

    &__header {
      $this: &;

      display: flex;
      align-items: center;
      margin-bottom: rem(25);
      padding-right: $Close-button--size;

      &--column {
        flex-direction: column;
        padding-right: 0;

        #{$this}-icon-box {
          margin-right: 0;
          margin-bottom: rem(10);
        }

        @include mq('tablet-small') {
          flex-direction: row;

          #{$this}-icon-box {
            margin-right: rem(10);
            margin-bottom: 0;
          }
        }
      }
    }

    &__header-icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: rem(45);
      height: rem(45);
      border-radius: rem(15);
      margin-right: rem(10);

      &--orange {
        background-color: $Color--primary-orange;
      }

      &--green {
        background-color: $Color--primary-green;
      }
    }

    &__header-icon {
      color: $Color--gray-100;
      font-size: rem(25);
    }

    &__header-title {
      font-family: $Font-Gilroy;
      font-weight: 700;
      color: $Color--white;
      font-size: rem(25);
      line-height: rem(25);
    }

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__field {
      width: 100%;
      margin-bottom: rem(10);
    }

    &__feedback {
      margin-bottom: rem(15);
      padding-top: rem(15);
    }

    &__feedback-title {
      margin-bottom: rem(10);
      font-weight: 700;
      font-size: rem(12);
      line-height: rem(12);
      text-align: center;
      text-transform: uppercase;
    }

    &__feedback-content {
      display: flex;
    }

    &__feedback-messengers {
      display: flex;
    }

    &__feedback-messenger {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: rem(10);
      font-size: rem(25);
      cursor: pointer;

      @include hover {
        .Modal__feedback-radio:not(:checked) + .Modal__feedback-radio-virtual::before {
          transform: translate(-50%, -50%) scale(0.8);
          opacity: 1;
        }
      }
    }

    &__feedback-radio {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;

      &:checked + .Modal__feedback-radio-virtual::before {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
    }

    &__feedback-radio-virtual {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(45);
      height: rem(45);

      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0);
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: $Color--gray-600;
        border-radius: 50%;
        opacity: 0;
        transition: transform $Transition--time, opacity $Transition--time;
        content: '';
      }
    }

    @include mq('tablet-small') {
      align-items: flex-end;
    }
  }

  .Modal-auth {
    .Modal__content {
      max-width: rem(355);
    }
  }

  .Modal-register {
    .Modal__content {
      max-width: rem(770);
    }

    .Modal__content-panel {
      width: 50%;

      @include mq('tablet-small') {
        max-width: rem(355);
        width: 100%;
      }
    }

    .Modal__content-main {
      padding-top: rem(60);

      @include mq('tablet-small') {
        padding-top: rem(25);
      }
    }
  }
</style>
