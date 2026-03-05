<template>
  <div>
    <div
      class="wra-service-bar"
      :class="{
        'hidden-print': hiddenPrint === true
      }"
    >
      <!-- Service Name on the left -->
      <div class="service-section">
        {{ serviceName }}
      </div>

      <!-- Navigation Links on the right or under burger menu -->
      <div class="navigation-section">
        <!-- Show links directly if 3 or fewer AND not on mobile -->
        <div v-if="!usesBurgerMenu" class="navigation-links">
          <a
            v-for="link in navigationLinks"
            :key="link.label"
            :href="link.href"
            class="menu-links"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Show burger menu if more than 3 links OR on mobile -->
        <div v-if="usesBurgerMenu" class="burger-menu-container">
          <button
            class="burger-menu-button"
            :aria-expanded="isMenuOpen"
            aria-controls="service-bar-menu"
            aria-label="Toggle navigation menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="icon prepend-icon-wrapper">
              <wra-icon :icon="isMenuOpen ? mdiClose : mdiMenu" />
            </span>
            Menu
          </button>
        </div>
      </div>
    </div>

    <!-- Menu content displayed below service bar when open -->
    <transition name="slide-fade">
      <div
        v-show="isMenuOpen && usesBurgerMenu"
        class="burger-menu-content"
        id="service-bar-menu"
        :aria-hidden="!isMenuOpen"
      >
        <div class="menu-inner">
          <a
            v-for="link in navigationLinks"
            :key="link.label"
            :href="link.href"
            class="menu-links"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import WraIcon from "./Icon.vue";
import { mdiMenu, mdiClose } from "@mdi/js";

export default defineComponent({
  name: "wra-service-bar",
  props: {
    /**
     * The name of the service to display.
     */
    serviceName: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * Array of navigation links. Each link should have a label and href.
     */
    navigationLinks: {
      type: Array as PropType<Array<{ label: string; href: string }>>,
      default: () => []
    },
    /**
     * If true, the service bar will be hidden when printing the page.
     */
    hiddenPrint: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * Mobile breakpoint in pixels. Burger menu shows on screens smaller than this width.
     */
    mobileBreakpoint: {
      type: Number as PropType<number>,
      default: 768
    }
  },
  data() {
    return {
      isMenuOpen: false,
      mdiMenu,
      mdiClose,
      windowWidth: typeof window !== "undefined" ? window.innerWidth : 768
    };
  },
  components: {
    WraIcon
  },
  computed: {
    usesBurgerMenu(): boolean {
      return (
        this.navigationLinks.length > 3 ||
        this.windowWidth < this.mobileBreakpoint
      );
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.windowWidth = window.innerWidth;
    }
  }
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin-block-start: 0px;
  margin-block-end: 0px;
}

.wra-service-bar {
  background-color: #e9f5ff;
  padding: 8px 20px;
  height: 64px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.service-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-family: Arvo;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.18px;
  max-width: 300px;
}

.navigation-section {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navigation-links {
  display: flex;
  gap: 16px;
  align-items: center;
  font-weight: normal;
}

.burger-menu-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.burger-menu-button {
  background-color: transparent;
  outline: 1px solid var(--color-wra-black);
  border: none;
  color: var(--color-wra-black);
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.burger-menu-button:focus {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prepend-icon-wrapper {
  margin-right: 5px;
}

.burger-menu-content {
  display: grid;
  background-color: #e9f5ff;
  padding: 0px 20px 20px 20px;
}

.menu-inner {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 0px;
}

.menu-links {
  color: var(--color-wra-black);
  font-weight: normal;
}

.slide-fade-enter-active {
  transition: grid-template-rows 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: grid-template-rows 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  grid-template-rows: 0fr;
}

@media print {
  .hidden-print {
    display: none;
  }
}
</style>
