<template>
  <button
    class="wra-button"
    type="button"
    :class="buttonClass"
    :disabled="disabled"
    :style="{
      '--button-border-color': `var(--color-${backgroundColor})`
    }"
  >
    <span
      :class="{
        'prepend-icon-wrapper': prependIcon
      }"
      class="icon"
    >
      <slot name="prepend-icon"></slot>
    </span>
    <slot></slot>
    <span
      :class="{
        'append-icon-wrapper': appendIcon
      }"
      class="icon"
    >
      <slot name="append-icon"></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "wra-button",
  props: {
    /**
     * The size of the button.
     */
    size: {
      type: String as () => string,
      default: "default"
    },
    /**
     * The background colour of the button.
     */
    backgroundColor: {
      type: String as () => string,
      default: "wra-black"
    },
    /**
     * If true, renders the button with an outlined style instead of a solid background.
     */
    outlined: {
      type: Boolean as () => boolean,
      default: false
    },
    prependIcon: {
      type: Boolean as () => boolean,
      default: false
    },
    appendIcon: {
      type: Boolean as () => boolean,
      default: false
    },
    /**
     * If true, disables the button and prevents user interaction.
     */
    disabled: {
      type: Boolean as () => boolean,
      default: false
    }
  },
  computed: {
    buttonClass(): Record<string, boolean> {
      return {
        "outlined-button": this.outlined,
        [`${this.size || "default"}-button`]: true,
        "wra-black": this.backgroundColor === "wra-black",
        "wra-blue": this.backgroundColor === "wra-blue",
        "wra-red": this.backgroundColor === "wra-red",
        "wra-green": this.backgroundColor === "wra-green",
        "wra-revenue": this.backgroundColor === "wra-revenue"
      };
    }
  }
});
</script>

<style scoped>
button {
  color: #fff;
  font-weight: 700;
  border: 3px solid var(--button-border-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: var(--color-wra-dark-grey);
}

button:focus {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  border: 3px solid var(--color-wra-black);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
  background-color: var(--color-wra-charcoal);
}

button:disabled:hover {
  opacity: 0.7;
  background-color: var(--color-wra-charcoal);
}

button.outlined-button:disabled {
  color: #fff;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prepend-icon-wrapper {
  margin-right: 8px;
}

.append-icon-wrapper {
  margin-left: 8px;
}

.wra-black {
  background-color: var(--color-wra-black);
}

.wra-black:hover:not(:focus) {
  background-color: var(--color-wra-dark-grey);
  border-color: var(--color-wra-dark-grey);
}

.wra-blue {
  background-color: var(--color-wra-blue);
}

.wra-blue:hover:not(:focus) {
  background-color: #3571b1;
  border-color: #3571b1;
}

.wra-red {
  background-color: var(--color-wra-red);
}

.wra-red:hover:not(:focus) {
  background-color: #d81f1f;
  border-color: #d81f1f;
}

.wra-green {
  background-color: var(--color-wra-green);
}

.wra-green:hover:not(:focus) {
  background-color: #008a19;
  border-color: #008a19;
}

.wra-revenue {
  background-color: var(--color-wra-revenue);
}

.wra-revenue:hover:not(:focus) {
  background-color: #55507b;
  border-color: #55507b;
}

.default-button {
  font-size: 18px;
  padding: 10px 20px;
  line-height: 24px;
  min-height: 45px;
}

.small-button {
  font-size: 16px;
  padding: 5px 15px;
  line-height: 24px;
  min-height: 35px;
}

.outlined-button {
  background-color: transparent;
  color: var(--color-prop, var(--color-wra-black));
}

.outlined-button:hover {
  background-color: var(--color-prop, var(--color-wra-black));
  color: #fff;
}
</style>

<style>
.wra-button:focus > .icon > svg {
  fill: var(--color-wra-black);
}
</style>
