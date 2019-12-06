<template>
  <div>
    {{ sponsor.name }}
  </div>
</template>

<script>
export default {
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  }
};
</script>
