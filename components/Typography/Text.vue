<script>
  export default {
    props: {
      component: {
        type: String,
        default: () => 'p',
      },
      variant: {
        type: String,
        default: () => 'text',
      },
    },

    render() {
      return h(
        this.component,
        { class: `Text Text--${this.variant}` }, this.$slots
      )
    },
  }
</script>

<style lang="scss">
  .Text {
    font-family: $Font-Roboto;
    color: $Color--gray-400;
    font-weight: 400;

    &--body {
      font-size: rem(24);
      line-height: rem(32);
      letter-spacing: -0.01em;

      &-bold {
        font-weight: 600;
        letter-spacing: normal;
      }
    }

    &--body2 {
      font-size: rem(16);
      line-height: rem(24);

      &-bold {
        font-weight: 500;
      }
    }

    &--text {
      font-size: rem(14);
      line-height: rem(24);

      &-bold {
        font-weight: 500;
      }
    }

    &--text2 {
      font-size: rem(12);
      line-height: rem(20);

      &-bold {
        font-weight: 600;
      }
    }
  }
</style>