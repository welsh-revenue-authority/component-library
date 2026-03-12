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
        <nav v-if="!usesBurgerMenu" class="navigation-links menu-links">
          <slot>
            <a
              v-for="link in navigationLinks"
              :key="link.label"
              :href="link.href"
              :aria-label="link.ariaLabel"
            >
              {{ link.label }}
            </a>
          </slot>
        </nav>

        <!-- Show burger menu if more than 3 links OR on mobile -->
        <div v-else class="burger-menu-container">
          <button
            class="burger-menu-button"
            :aria-expanded="isMenuOpen"
            :aria-controls="props.id"
            aria-label="Toggle navigation menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="icon prepend-icon-wrapper">
              <WraIcon :icon="isMenuOpen ? mdiClose : mdiMenu" />
            </span>
            {{ menuLabel }}
          </button>
        </div>
      </div>
    </div>

    <!-- Menu content displayed below service bar when open -->
    <transition name="slide-fade">
      <div
        v-if="isMenuOpen && usesBurgerMenu"
        class="burger-menu-content"
        :id="props.id"
        :aria-hidden="!isMenuOpen"
      >
        <div class="menu-inner">
          <nav aria-label="Mobile menu">
            <a
              v-for="link in navigationLinks"
              :key="link.label"
              :href="link.href"
              :aria-label="link.ariaLabel"
              class="menu-links"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import WraIcon from "@/components/Icon.vue";
import { mdiMenu, mdiClose } from "@mdi/js";

export interface NavigationLink {
  label: string;
  href: string;
  ariaLabel: string;
}

const props = withDefaults(
  defineProps<{
    /**
     * The name of the service to display.
     */
    serviceName: string;
    /**
     * Array of navigation links. Each link should have a label, href, and aria label.
     */
    navigationLinks?: NavigationLink[];
    /**
     * If true, the service bar will be hidden when printing the page.
     */
    hiddenPrint?: boolean;
    /**
     * Mobile breakpoint in pixels. Burger menu shows on screens smaller than this width.
     */
    mobileBreakpoint?: number;
    /**
     * Label text for the menu button.
     */
    menuLabel?: string;
    id?: string;
  }>(),
  {
    navigationLinks: () => [],
    hiddenPrint: false,
    mobileBreakpoint: 768,
    menuLabel: "Menu",
    id: "wra-service-bar-menu"
  }
);

// Reactive state
const isMenuOpen = ref(false);
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 768
);

// Computed property
const usesBurgerMenu = computed(() => {
  return (
    props.navigationLinks.length > 3 ||
    windowWidth.value < props.mobileBreakpoint
  );
});

// Methods
const handleWindowResize = () => {
  windowWidth.value = window.innerWidth;
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener("resize", handleWindowResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleWindowResize);
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
  grid-template-rows: 1fr;
}

.menu-inner {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 0px;
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

<style>
.wra-service-bar .menu-links a,
.wra-service-bar .menu-links button {
  color: var(--color-wra-black);
  font-weight: normal;
}
</style>
