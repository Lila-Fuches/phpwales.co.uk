<template>
  <div id="app">
    <div class="w-auto h-screen relative">
      <site-nav />

      <main>
        <slot />
      </main>
        

      <footer class="w-full border-t py-3 px-4 pin-b">
        <div class="container mx-auto">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-1/2 font-sans text-sm">
              <ul class="flex flex-row list-reset items-center justify-between">
                <li class="p-2 text-center lg:text-left">
                  <g-link
                    to="/code-of-conduct"
                  >
                    Code of Conduct
                  </g-link>
                </li>
                <!-- <li class="p-2">Privacy &amp; Terms</li> -->
                <li class="p-2">
                  <g-link
                    to="/contact"
                  >
                    Contact Us
                  </g-link>
                </li>
              </ul>
            </div>
            <div class="w-1/2 hidden lg:block">
              <ul class="flex flex-row-reverse list-reset">
                <li class="p-2">
                  <a
                    target="_blank"
                    href="https://twitter.com/PhpWales"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-twitter"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import SiteNav from "~/components/SiteNav";
export default {
  components: {
    SiteNav
  }
};
</script>
