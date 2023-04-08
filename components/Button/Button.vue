<template>
  <a
    class="Button Button--sm"
    :class="[
      'Button--' + variant,
      'Button--' + size,
      disabled ? 'Button--disabled' : ''
    ]"
    :href=href
  >
    <span class="Button__text">
      <slot>{{ text }}</slot>
    </span>
  </a>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: () => '',
      },
      href: {
        type: String,
        default: () => '#',
      },
      variant: {
        type: String,
        default: () => 'primary',
      },
      size: {
        type: String,
        default: () => 'sm',
      },
      disabled: {
        type: Boolean,
        default: () => false,
      }
    }
  }
</script>

<style lang="scss">
  .Button {
    $this: &;

    display: inline-block;
    font-family: $Font-Gilroy--bold;
    font-weight: 700;
    color: $Color--gray-800;
    font-size: rem(14);
    line-height: rem(16);
    text-decoration: none;
    border: rem(2) solid transparent;
    border-radius: rem(90);
    transition: background-color $Transition--time, color 0.3s, border-color $Transition--time;

    &--disabled {
      opacity: 0.5;
      cursor: default;
      pointer-events: none;
      user-select: none;
    }

    &--primary {
      background-color: $Color--primary-yellow;

      @include hover {
        background-color: $Button-color--hover;
      }

      &#{$this}--disabled {
        background-color: $Button-color--disabled;
      }
    }

    &--light {
      color: $Color--gray-100;

      @include hover {
        background-color: $Color--gray-700;
      }

      &#{$this}--disabled {
        background-color: $Color--gray-700;
      }
    }

    &--dark {
      color: $Color--gray-100;
      background-color: $Color--gray-800;
      border-color: $Color--gray-500;

      @include hover {
        color: $Color--gray-700;
        background-color: $Color--gray-100;
        border-color: transparent;
      }

      &#{$this}--disabled {
        color: $Color--gray-700;
        background-color: $Color--gray-100;
        border-color: transparent;
      }
    }

    &--sm {
      padding: rem(10) rem(14);
    }

    &--md {
      padding: rem(14) rem(22);
      font-size: rem(16);
    }
  }
</style>