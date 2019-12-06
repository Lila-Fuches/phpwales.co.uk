<template>
  <div class="md:flex bg-background-primary rounded-lg p-6">
    <g-image
      :src="speaker.headshot"
      alt="Speaker Avatar"
      class="h-24 w-24 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 my-4 md:my-0"
    />
    <div class="text-center md:text-left">
      <h2 class="text-lg">{{ speaker.name }}</h2>
      <div>{{ speaker.job }} @ {{ speaker.company }}</div>
      <div>{{ speaker.talk }}</div>
      <div>
        <a class="text-red-500 hover:text-red-600 text-md" :href="speaker.twitter" target="_blank">
          Find me on twitter
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    speaker: {
      type: Object,
      required: true
    }
  }
};
</script>