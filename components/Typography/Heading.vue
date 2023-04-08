<script>
  export default {
    props: {
      level: {
        type: Number,
        default: () => 1
      },
      align: {
        type: String,
        default: () => 'left',
      },
    },

    render() {
      return h(
        `h${this.level}`,
        { class: `Heading Heading--h${this.level} Heading--${this.align}` }, this.$slots
      )
    },
  }
</script>

<style lang="scss">
  .Heading {
    font-weight: 700;
    color: $Color--gray-400;
    text-align: left;

    &--hero {
      font-size: rem(96);
      line-height: rem(96);
    }

    &--h1 {
      font-size: rem(64);
      line-height: rem(64);
    }

    &--h2 {
      font-size: rem(48);
      line-height: rem(56);

      @include mq('tablet-small') {
        font-size: rem(25);
        line-height: rem(25);
      }
    }

    &--h3 {
      font-size: rem(40);
      line-height: rem(48);

      @include mq('tablet-small') {
        font-size: rem(25);
        line-height: rem(25);
      }
    }

    &--h4 {
      font-size: rem(32);
      line-height: rem(40);

      @include mq('tablet-small') {
        font-size: rem(25);
        line-height: rem(25);
      }
    }

    &--center {
      text-align: center;
    }
  }
</style>