<template>
    <div>
        <template v-if="sponsorType === 'Community'">
            <community-sponsor :sponsor="sponsor" />
        </template>
    </div>
</template>

<script>
import CommunitySponsor from "~/components/Sponsors/CommunitySponsor";
export default {
  props: {
    sponsor: {
      type: Object,
      required: true
    }
  },
  components: {
      CommunitySponsor
  },
  computed: {
      sponsorType() {
          return this.sponsor.types[0].title
      }
  }
};
</script>
