<template>
  <div class="shadow">
    <div class="md:px-8">
      <nav class="relative flex flex-wrap items-center justify-between md:py-4">
        <div class="relative z-10 flex-shrink-0 pl-4 py-4 md:p-0">
          <g-link
            to="/"
          >
            <logo-icon height="10 lg:h-12" />
          </g-link>
        </div>
        <div class="flex-shrink-0 pr-4 md:hidden">
          <button
            ref="openButton"
            @click="open"
            type="button"
            class="block focus:outline-none focus:"
            aria-label="Menu"
          >
            <menu-icon />
          </button>
        </div>
        <div
          class="hidden md:block md:ml-10 md:flex md:items-baseline md:justify-between md:bg-transparent"
        >
          <div class="lg:absolute inset-0 flex items-center justify-center">
            <g-link
              to="/contact"
              class="ml-10 text-sm font-medium"
            >
              Contact Us
            </g-link>
            <g-link
              to="/code-of-conduct"
              class="ml-10 text-sm font-medium"
            >
              Code of Conduct
            </g-link>
          </div>
          <div class="ml-10 relative flex items-baseline">
            <toggle-theme class="ml-8 px-3 font-medium text-center text-sm rounded-lg" />
          </div>
        </div>
      </nav>
    </div>
    <div class="md:hidden">
      <!-- Off-canvas menu background overlay -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
        appear
      >
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
          <div @click="close" class="absolute inset-0 bg-black opacity-50" tabindex="-1"></div>
        </div>
      </transition>

      <!-- Off-canvas menu -->
      <transition
        enter-class="translate-x-full"
        enter-active-class="ease-out transition-slow"
        enter-to-class="translate-x-0"
        leave-class="translate-x-0"
        leave-active-class="ease-in transition-medium"
        leave-to-class="translate-x-full"
        appear
      >
        <div
          v-show="isOpen"
          class="z-10 bg-background-secondary fixed inset-y-0 right-0 max-w-xs w-full transition-transform overflow-y-auto"
        >
          <div class="relative z-10">
            <div :class="isOpen ? 'block' : 'hidden'" class="absolute top-0 right-0 p-4">
              <button
                ref="closeButton"
                @click="close"
                type="button"
                class="focus:outline-none"
                aria-label="Close"
              >
                <menu-close-icon />
              </button>
            </div>
            <div class="px-4 pt-4 pb-6">
              <g-link
                to="/"
                class="mb-12"
              >
                <logo-icon height="8" />
              </g-link>
              <g-link
                to="/code-of-conduct"
                class="mt-4 block font-medium"
              >
                Code of Conduct
              </g-link>
              <g-link
                to="/contact"
                class="mt-4 block font-medium"
              >
                Contact Us
              </g-link>
            </div>
          </div>
          <div class="relative">
            <div class="p-4">
              <toggle-theme class="block px-3 py-3 font-medium text-center bg-gray-300 rounded-lg" />
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import LogoIcon from "~/components/Icons/LogoIcon";
import MenuIcon from "~/components/Icons/MenuIcon";
import ToggleTheme from "~/components/ToggleTheme";
import MenuCloseIcon from "~/components/Icons/MenuCloseIcon";
export default {
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    LogoIcon,
    MenuIcon,
    ToggleTheme,
    MenuCloseIcon
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.$refs.closeButton.focus();
      });
    },
    close() {
      this.isOpen = false;
      this.$nextTick(() => {
        this.$refs.openButton.focus();
      });
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (isOpen) {
          document.body.style.setProperty("overflow", "hidden");
        } else {
          document.body.style.removeProperty("overflow");
        }
      }
    }
  }
};
</script>