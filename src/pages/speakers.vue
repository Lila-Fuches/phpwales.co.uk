<template>
  <Layout>
    <hero>
      <template v-slot:heading>
        We will be periodically announcing speakers 🎤
      </template>
      <template v-slot:message>
        <span>Check back to see the line up or</span>
        <a
            href="https://www.papercall.io/php-wales-2020"
            target="_blank"
            class="text-red-700 font-semibold hover:text-white rounded text-center"
          >
            Submit to our CFP
          </a>
      </template>
    </hero>
    <div class="w-full p-4 bg-background-secondary">
      <template v-if="$page.speakers.edges.length < 1">
        <div class="container mx-auto p-4">
          <h3 class="text-center leading-normal text-lg lg:text-2xl">
            We have not announced any speakers just yet, come back soon!
          </h3>
        </div>
      </template>
      <template v-else>
        <div class="container mx-auto p-4">

          <div class="flex flex-wrap items-center justify-between">

            <speaker-card
              v-for="edge in $page.speakers.edges"
              :key="edge.node.id"
              :speaker="edge.node"
            />

          </div>

        </div>
      </template>
    </div>
  </Layout>
</template>

<page-query>
query {
  speakers: allSpeaker {
    edges {
      node {
        id
        name
        job
        company
        headshot
        talk
        twitter
      }
    }
  }
}
</page-query>

<script>
import Hero from "~/components/Hero";
import SpeakerCard from "~/components/Speakers/SpeakerCard";
export default {
  components: {
    Hero,
    SpeakerCard
  }
};
</script>