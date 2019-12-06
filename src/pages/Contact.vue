<template>
  <Layout>
    <hero>
      <template v-slot:heading>
        Don't be shy. Say hi 👋
      </template>
      <template v-slot:message>
        Need to get in touch with us for any reason at all, please use this form. <br>
        We will reply as soon as we can.
      </template>
    </hero>
    <div class="w-full p-4 bg-background-secondary">
      <div class="container mx-auto">
        <form action="https://formspree.io/phpwales@gmail.com" method="POST" class="mb-12">
          <div class="flex flex-wrap mb-6 -mx-4">
            <div class="w-full md:w-1/2 mb-6 md:mb-0 px-4">
              <label for="name" class="block mb-2 text-copy-primary">
                Name
              </label>
              <input type="text" name="name" id="name" placeholder="Jon Snow" required="required" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-purple-700 mb-2 p-4">
            </div>
            <div class="w-full px-4 md:w-1/2">
              <label for="email" class="block text-copy-primary mb-2">
                Email Address
              </label>
              <input type="email" name="email" id="email" placeholder="email@example.com" required="required" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-purple-700 mb-2 p-4">
            </div>
          </div>
          <div class="w-full mb-12">
            <label for="message" class="block text-copy-primary mb-2">
              Message
            </label>
            <textarea id="message" rows="5" name="message" placeholder="Enter your message here." required="required" class="block w-full bg-background-form border border-border-color-primary shadow rounded outline-none appearance-none focus:border-purple-700 mb-2 px-4 py-4"></textarea>
          </div>
          <div class="flex justify-end w-full">
            <input type="submit" value="Submit" class="block bg-red-500 hover:bg-red-600 text-white text-sm font-semibold tracking-wide uppercase shadow rounded cursor-pointer px-6 py-3">
          </div>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
  import Hero from "~/components/Hero";
  export default {
    components: {
      Hero
    }
  };
</script>