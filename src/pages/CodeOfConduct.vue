<template>
  <Layout>
    <div>
      <hero>
      <template v-slot:heading>
        Code of Conduct
      </template>
      <template v-slot:message>
        Please make sure you understand this code of conduct, <br>
        if you have problems constact us directly.
      </template>
    </hero>
      <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center mb-6">
        <div class="text-lg leading-wide">
          <p class="mb-4">All attendees, speakers, sponsors and volunteers at our conference are required to agree with the following code of conduct. Organisers will enforce this code throughout the event. We are expecting cooperation from all participants to help ensuring a safe environment for everybody.</p>

          <h2 class="text-2xl mb-2">Need Help?</h2>

          <p class="mb-4">You have our contact details in the emails we’ve sent.</p>

          <h2 class="text-2xl mb-2">The Quick Version</h2>

          <p class="mb-4">
            Our conference is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference
            <em>without a refund</em> at the discretion of the conference organisers.
          </p>

          <h2 class="text-2xl mb-2">The Less Quick Version</h2>

          <p class="mb-2">Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.</p>

          <p class="mb-2">Participants asked to stop any harassing behavior are expected to comply immediately.</p>

          <p class="mb-2">Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>

          <p class="mb-2">If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.</p>

          <p class="mb-2">If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified as they'll be wearing branded t-shirts.</p>

          <p class="mb-2">Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>

          <p class="mb-4">We expect participants to follow these rules at conference and workshop venues and conference-related social events.</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Hero from "~/components/Hero";
export default {
  metaInfo: {
    title: "Code of Conduct",
    meta: [
      {
        key: "og:title",
        name: "og:title",
        content: "PHPWales - 3rd and 4th June 2020"
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "PHPWales - 3rd and 4th June 2020"
      }
    ],
    script: [
      {
        innerHTML: `{"@context": "http://schema.org","@type": "Event","eventStatus": "http://schema.org/EventScheduled","name": "PHP Wales"}`,
        type: "application/ld+json"
      }
    ]
  },
  components: {
    Hero
  }
};
</script>