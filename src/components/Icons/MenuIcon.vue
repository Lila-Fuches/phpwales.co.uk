<template>
  <svg viewBox="0 0 24 24" fill="currentColor" :class="`fill-current h-${this.height} w-${this.width}`">
    <path
      d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z"
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