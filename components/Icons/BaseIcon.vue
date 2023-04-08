<template>
  <component
    :is="iconComponent"
    role="img"
    class="BaseIcon"
  />
</template>
 
<script>
  import star from './StarIcon.vue';
  import check from './CheckIcon.vue';
  import removeCircle from './RemoveCircleIcon.vue';
  import eye from './EyeIcon.vue';
  import megaphone from './MegaphoneIcon.vue';
  import smile from './SmileIcon.vue';
  import chart from './ChartIcon.vue';
  import close from './CloseIcon.vue';
  import lock from './LockIcon.vue';
  import user from './UserIcon.vue';
  import telegram from './TelegramIcon.vue';
  import skype from './SkypeIcon.vue';
  import arrow from './ArrowIcon.vue';

  const icons = {
    star,
    check,
    removeCircle,
    eye,
    megaphone,
    smile,
    chart,
    close,
    lock,
    user,
    telegram,
    skype,
    arrow,
  }

  export default {
    props: {
      name: {
        type: String,
        required: true,
        validator(value) {
          return Object.prototype.hasOwnProperty.call(icons, value)
        },
      },
    },
  
    computed: {
      iconComponent() {
        return icons[this.name]
      },
    },
  }
</script>

<style scoped>
  .BaseIcon {
    display: inline-block;
    width: 1em;
    height: 1em;
  }
</style>