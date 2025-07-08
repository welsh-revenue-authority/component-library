<template>
  <button
    class="skip-link"
    :class="{ 'skip-link-full-width': fullWidth }"
    @click="onClick()"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "wra-skip-link",
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
        const tempTabIndex = element.tabIndex;
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
    },
    /**
     * If true, the skip link will take the full width of its container.
     * @type {boolean}
     * @default false
     */
    fullWidth: {
      type: Boolean,
      default: false
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
  background-color: var(--color-wra-grey);
  color: var(--color-wra-black);
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1em;
}

.skip-link:focus {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
}

.skip-link-full-width {
  width: 100%;
  text-align: left;
}

.skip-link-full-width:focus {
  outline-width: 0px;
  border-width: 0px;
}
</style>
