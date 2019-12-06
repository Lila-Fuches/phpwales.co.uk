<template>
  <div class="md:flex items-center bg-background-primary rounded-lg p-6">
    <g-image
      :src="partner.cover_image"
      class="h-24 w-auto rounded-full mx-auto md:mx-0 md:mr-6"
      :alt="`${partner.name}'s Logo`"
    />
    <div class="text-center md:text-left pt-6 lg:pt-0">
      <h2 class="text-lg">
        <a
          :href="`${partner.website}?utm=phpwales-2020`"
          target="_blank"
          class="hover:text-red-500"
        >
        {{ partner.name }}
        </a>
      </h2>
      <!-- <div class="text-purple-500">Customer Support</div>
      <div class="text-gray-600">erinlindford@example.com</div>
      <div class="text-gray-600">(555) 765-4321</div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    partner: {
      type: Object,
      required: true
    }
  }
};
</script>
