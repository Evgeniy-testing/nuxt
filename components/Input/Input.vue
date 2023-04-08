<template>
  <div
    class="Input"
    :class="{'Input--error': error, 'Input--success': success}"
  >
      <label v-if="label" class="Input__label" :for=id>{{ label }}</label>
      <div class="Input__box">
        <input class="Input__field" :id=id :type=type :placeholder=placeholder autocomplete="off">
        <button class="Input__icon-button">
          <BaseIcon v-if="type === 'password'" class="Input__icon" name="eye" />
          <BaseIcon v-if="success" class="Input__icon" name="check" />
          <BaseIcon v-if="error" class="Input__icon" name="removeCircle" />
        </button>
      </div>
    <span v-if="error" class="Input__message">Display error message here.</span>
  </div>
</template>

<script>
  import BaseIcon from '../Icons/BaseIcon';

  export default {
    components: { BaseIcon },
    props: {
      id: String,
      success: Boolean,
      error: Boolean,
      type: {
        type: String,
        default: () => 'text'
      },
      label: {
        type: String,
        default: () => 'Label',
      },
      placeholder: {
        type: String,
        default: () => 'Input caption',
      },

      data() {
        return {
          error: false,
          message: [],
        }
      },
    },
  }
</script>

<style lang="scss">
  .Input {
    $this: &;
    $Input_indent: 16px;
    $Input_icon-size: 24px;
    $Input_icon-indent: 10px;

    display: flex;
    flex-direction: column;
    max-width: rem(352);

    &__label {
      margin-bottom: rem(12);
      font-weight: 700;
      color: $Color--gray-400;
      font-size: rem(12);
      line-height: rem(12);
      text-transform: uppercase;
    }

    &__box {
      position: relative;
      display: flex;
      flex-direction: column;
      height: rem(48);
      color: $Color--gray-300;
      border-radius: rem(70);
      border: rem(2) solid $Color--gray-600;
      transition: border-color $Transition--time;

      @include hover {
        border-color: $Color--gray-500;
      }

      &:focus {
        color: $Color--gray-300;
        border-color: $Color--primary-yellow;
      }

      #{$this}--success & {
        border-color: $Color--primary-green;
      }

      #{$this}--error & {
        color: $Color--primary-orange;
        border-color: $Color--primary-orange;
      }
    }

    &__field {
      width: 100%;
      height: 100%;
      padding: $Input-indent;

      // to prevent text overlapping the icon
      padding-right: $Input_icon-indent * 2 + $Input_icon-size;

      font-family: $Font-Gilroy--bold;
      font-weight: 700;
      color: inherit;
      font-size: rem(14);
      line-height: rem(16);
      background: none;
      border: none;

      &::placeholder {
        color: $Color--gray-500;
      }
    }

    &__icon-button {
      position: absolute;
      top: 50%;
      right: $Input_icon-indent;
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(30);
      height: rem(30);
      padding: 0;
      background: none;
      border: none;
      transform: translateY(-50%);
      transition: opacity $Transition--time;
      cursor: pointer;

      @include hover {
        opacity: 0.5;
      }
    }

    &__icon {
      color: $Color--gray-500;
      font-size: $Input_icon-size;
    }

    &__message {
      padding: 0 rem(16);
      font-family: $Font-Poppins;
      color: $Color--primary-orange;
      font-size: rem(10);
      line-height: rem(12);

      &:not(:empty) {
        margin-top: rem(5);
      }
    }

    &--success &__icon-button {
      pointer-events: none;
    }

    &--success &__icon {
      color: $Color--primary-green;
    }
  }
</style>