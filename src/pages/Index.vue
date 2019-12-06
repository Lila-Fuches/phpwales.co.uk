<template>
  <Layout>
    <div class="container mx-auto pt-1 lg:pt-6 pb-6 lg:pb-24">
      <div class="flex flex-wrap mt-6">
        <div class="w-full lg:w-1/2 px-2">
          <p class="uppercase tracking-loose w-full">3rd June 2020 - 4th June 2020</p>
          <h1 class="my-4 text-3xl lg:text-5xl font-bold leading-tight">The first annual PHP Wales Conference</h1>
          <h3
            class="leading-normal text-lg lg:text-2xl mb-8"
          >A 2 day event full of talks and workshops, inside Cardiffs City Hall on the 3rd and 4th June 2020.</h3>
        </div>
        <div class="w-full lg:w-1/2 flex items-center">
          <city-hall
            width="full"
            height="auto"
            class=""
          />
        </div>
      </div>
    </div>
    <div class="w-full p-4 bg-background-secondary">
      <div class="flex flex-wrap items-center justify-between">
        <div class="w-full text-center py-3">
          <g-link
            to="/contact"
            class="text-red-700 font-semibold hover:text-white py-2 px-4 rounded text-center"
          >
            Get in touch for sponsorship opportunities
          </g-link>
        </div>
        <!-- <div class="w-full lg:w-1/3">headline sponsor</div>
        <div class="w-full lg:w-1/3">headline sponsor</div>
        <div class="w-full lg:w-1/3">headline sponsor</div> -->
      </div>
    </div>
    <div class="container mx-auto pt-1 lg:pt-6 pb-6 lg:pb-24 px-2">
      <h3 class="my-4 text-1xl lg:text-2xl font-bold leading-tight w-full lg:w-4/5">
        Held in the picturesque setting of <span class="text-red-500">Central Cardiff</span>, accessible
        from local airports and train stations - <span class="text-red-500">PHP Wales</span> will be
        bringing together around <span class="text-red-500">400 PHP developers</span> from around the
        world.
      </h3>

      <p class="leading-normal text-md lg:text-xl mb-8">
        With your help we can put on our inaugural conference at PHPWales, bringing together 400
developers from around the world. Spread over 2 days in the capital city of Wales (Cardiff).
Hosted in the Cardiff City Hall be sure to come along for the chance to learn from some of
the best in the industry.
With this being our first run, we wanted to set the theme to ensure the message was clear.
Our theme is community, inclusion, and the importance of these. We have all seen when a
community goes bad, or individuals are excluded from a community for one reason or
another. We want to remind people that we are all one community of developers - but for
these 2 days we are uniting under the banner of PHP.  
      </p> 

      <h3 class="my-4 text-1xl lg:text-2xl font-bold leading-tight">
        Our Tracks
      </h3>

      <h4 class="my-4 text-lg lg:text-xl font-bold leading-tight">API Track</h4>
      <p class="leading-normal text-md lg:text-xl mb-8">
        The API track is dedicated to all things API, from OpenAPI specifications, to JSON:API
schema to how to build a microservice with the beautiful Slim4 this track is for your
      </p>

      <h4 class="my-4 text-lg lg:text-xl font-bold leading-tight">Tooling and Language Track</h4>
      <p class="leading-normal text-md lg:text-xl mb-8">
        The Tooling and Language Track is the track that covers pretty much anything not covered
in the other track, something of a catch all. From MySQL8 to how to utilise PHP7.4 and
beyond. If you want to give a more general tech talk, or a talk that doesn’t fall into the
unConf or API track this is the track for you.
      </p>

      <h4 class="my-4 text-lg lg:text-xl font-bold leading-tight">unConf Track</h4>
      <p class="leading-normal text-md lg:text-xl mb-8">
        The unConf track is a track dedicated to lightning talks and panel discussions, this is where
        we will hear a lot of different talks (on any technology subject) and have discussions on
        larger subjects.
      </p>
    </div>
    <div class="w-full p-4 bg-background-secondary">
      <div class="flex flex-wrap items-center justify-between text-center">
        <div class="w-full lg:w-1/2 py-3">
          <a
            href="https://opencollective.com/php-wales"
            target="_blank"
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Open Collective
          </a>
        </div>
        <div class="w-full lg:w-1/2 py-3">
          <a
            href="https://www.papercall.io/php-wales-2020"
            target="_blank"
            class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          >
            Call for Papers
          </a>
        </div>
      </div>
    </div>
    <div class="container mx-auto py-6 lg:py-24 px-2">
      <p class="leading-normal text-md lg:text-xl mb-8">
        PHPWales is a new conference and is an attempt to bring together all developers under the
        banner of PHP for the day to learn some cool new things, but also strengthen the community
        and promote inclusion. The theme for our first conference is community and inclusion, we
        want to stress the importance of community for developers and how important inclusion is for
        a community.
      </p>

      <p class="leading-normal text-md lg:text-xl mb-8">
        This is the first PHP conference in Wales, and we aim to set the standards for what a
        conference should be and how it should operate. All while allowing us to provide an
        incredible learning opportunity and conference experience. And for that, we cannot thank
        you enough.
      </p>
    </div>
    <div class="w-full bg-background-secondary p-6">
      <div class="w-full items-center text-center">
        <h3 class="leading-normal text-lg lg:text-2xl mb-8">Our Partners</h3>
      </div>
      <div class="flex flex-wrap items-center">
        <div
          v-for="edge in $page.partners.edges"
          :key="edge.node.id"
        >
          <partner-card :partner="edge.node" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  partners: allPartner {
    edges {
      node {
        id
        name
        website
        cover_image (width: 770, height: 380, blur: 10)
      }
    }
  }
}
</page-query>

<script>
import CityHall from "~/components/Icons/CityHall";
import PartnerCard from "~/components/Partners/PartnerCard";
export default {
  components: {
    CityHall,
    PartnerCard
  },
  metaInfo: {
    title: "Home"
  }
};
</script>
