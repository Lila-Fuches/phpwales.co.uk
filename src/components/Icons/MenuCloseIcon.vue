<template>
  <svg viewBox="0 0 24 24" fill="currentColor" :class="`fill-current h-${this.height} w-${this.width}`">
    <path
      d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "6"
    },
    height: {
      type: String,
      required: false,
      default: "6"
    }
  }
};
</script>