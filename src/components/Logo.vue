<template>
  <svg :class="`h-${this.height} w-${this.width}`" viewBox="0 0 150 150" fill="none">
    <path d="M74.545 149.411L10.67 37.284l129.116 1.02-65.24 111.107z" fill="#FC8181"/>
    <path d="M75.37 132.133L20.775 37.567l110.34.872-55.745 93.694z" fill="#F56565"/>
    <path d="M46.512 136.55l13.476-35.307 15.287 15.023-28.763 20.284z" fill="#CBD5E0"/>
    <path d="M102.487 136.55l-13.476-35.307-15.287 15.023 28.763 20.284z" fill="#CBD5E0"/>
    <path d="M39.032 36.735L59.669 26.53h31.405l20.189 10.749-36.56 111.7L39.033 36.735z" fill="#E53E3E"/>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      required: false,
      type: String,
      default: '6'
    },
    height: {
      required: false,
      type: String,
      default: '6'
    }
  }
};
</script>
