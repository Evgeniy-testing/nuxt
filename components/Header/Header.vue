<template>
  <header class="Header">
    <a href="#" class="Header__logo">
      <img class="Header__logo-image" src="@/assets/images/logo.svg" alt="SCPartners logo" width="222" height="45">
    </a>
    <nav class="Header__nav">
      <Button class="Header__nav-link" variant="dark" @click="this.$parent.showModal.auth = true">Вхід</Button>
      <Button class="Header__nav-link" @click="this.$parent.showModal.register = true">Реєстрація</Button>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .Header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: rem(24);
    border-bottom: rem(1) solid $Color--gray-700;

    &__logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &__logo-image {
      width: 100%;
      height: auto;
    }

    &__nav {
      display: flex;
    }

    &__nav-link {
      margin-left: rem(15);
    }

    @include mq('tablet-small') {
      justify-content: space-between;
      padding: rem(10) rem(15);

      &__logo {
        position: static;
        width: rem(148);
        transform: none;
      }

      &__nav-link {
        margin-left: rem(10);
      }
    }
  }
</style>