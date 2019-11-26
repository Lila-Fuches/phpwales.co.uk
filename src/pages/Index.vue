<template>
  <Layout :show-logo="false">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div
        class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left"
      >
        <p class="uppercase tracking-loose w-full">3rd June 2020 - 4th June 2020</p>
        <h1 class="my-4 text-5xl font-bold leading-tight">The first annual PHP Wales Conference</h1>
        <h3
          class="leading-normal text-2xl mb-8"
        >A 2 day event full of talks and workshops, inside Cardiffs City Hall on the 3rd and 4th June 2020. Please subscribe to our newsletter to be kept up to date.</h3>
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us5.list-manage.com/subscribe/post?u=9d8153b6040b765f35bab4223&amp;id=e0094ddc5a"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            novalidate="novalidate"
            class="validate m-4 flex"
          >
            <div id="mc_embed_signup_scroll">
              <input
                type="email"
                value
                name="EMAIL"
                id="mce-EMAIL"
                placeholder="email address"
                required="required"
                class="email rounded-none sm:rounded-l-full p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
              />
              <div aria-hidden="true" style="position: absolute; left: -5000px;">
                <input
                  type="text"
                  name="b_9d8153b6040b765f35bab4223_e0094ddc5a"
                  tabindex="-1"
                  value
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button px-8 rounded-none sm:rounded-r-full bg-red-600 font-bold p-4 uppercase border-red-700 border-t border-b border-r"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="w-full md:w-3/5">
        <g-image
          alt="Cardiff City Hall"
          src="/images/conference_speaker.svg"
          class="w-full md:w-4/5 float-right z-50 g-image"
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        ...on Post {
        id
        title
        path
        }
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Author from "~/components/Author.vue";
import PostCard from "~/components/PostCard.vue";

export default {
  components: {
    Author,
    PostCard
  },
  metaInfo: {
    title: "Home"
  }
};
</script>
