<template>
  <button class="skip-link" @click="onClick()">
    {{ text }}
  </button>
</template>

<script>
/**
 * SkipLink component
 *
 * This component provides a skip link button that allows users to skip to a specific part of the page.
 * The target element can be specified using the `skip-id` prop.
 */
export default {
  name: "wra-skiplink",
  emits: ["click"],
  methods: {
    /**
     * Handles the click event for the skip link button.
     * Focuses the target element specified by the `id` prop.
     * If no `id` is provided, emits a "click" event.
     */
    onClick() {
      if (typeof this.skipId === "undefined" || this.skipId === null) {
        this.$emit("click");
        return;
      }
      const element = document.getElementById(this.skipId);
      if (element) {
        var tempTabIndex = element.tabIndex;
        element.tabIndex = -1;
        element.focus();
        element.tabIndex = tempTabIndex;
      }
    }
  },
  props: {
    /**
     * The ID of the target element to focus. If not provided, the component will emit a click event.
     * @type {string}
     */
    skipId: {
      type: String
    },
    /**
     * The text to display on the skip link button.
     * @type {string}
     * @default "Skip to main content"
     */
    text: {
      type: String,
      default: "Skip to main content"
    }
  }
};
</script>

<style scoped>
.skip-link:not(:focus):not(:active) {
  clip: rect(0 0 0 0) !important;
  border: 0 !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: 0 !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  white-space: nowrap !important;
  width: 1px !important;
}

.skip-link {
  background-color: #e5e5e5;
  color: #1f1f1f;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1em;
}

.skip-link:focus {
  color: #1f1f1f !important;
  background-color: #ffd530 !important;
  outline: 2px solid #1f1f1f;
  outline-offset: 0px;
  border-color: #ffd530;
}
</style>
