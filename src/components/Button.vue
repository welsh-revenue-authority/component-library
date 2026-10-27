<template>
  <button
    class="wra-button"
    type="button"
    :class="buttonClass"
    :disabled="disabled"
    :style="{
      '--button-border-color':
        backgroundColor === 'wra-white'
          ? 'var(--color-wra-black)'
          : `var(--color-${backgroundColor})`
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
  name: "WraButton",
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
      type: Boolean,
      default: false
    },
    prependIcon: {
      type: Boolean,
      default: false
    },
    appendIcon: {
      type: Boolean,
      default: false
    },
    /**
     * If true, disables the button and prevents user interaction.
     */
    disabled: {
      type: Boolean,
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
        "wra-revenue": this.backgroundColor === "wra-revenue",
        "wra-white": this.backgroundColor === "wra-white"
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

button:hover:not(:disabled) {
  background-color: var(--color-wra-dark-grey);
}

button:focus:not(:disabled) {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  border: 3px solid var(--color-wra-black);
}

button:focus-visible {
  outline: none;
}

button:disabled {
  cursor: not-allowed;
  background-color: var(--color-wra-dark-grey);
  border-color: var(--color-wra-dark-grey);
  color: #fff;
}

button.outlined-button:disabled {
  background-color: transparent;
  color: var(--color-wra-dark-grey);
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prepend-icon-wrapper {
  margin-right: 5px;
}

.append-icon-wrapper {
  margin-left: 5px;
}

.wra-black {
  background-color: var(--color-wra-black);
}

.wra-black:hover:not(:focus):not(:disabled) {
  background-color: var(--color-wra-dark-grey);
  border-color: var(--color-wra-dark-grey);
}

.wra-blue {
  background-color: var(--color-wra-blue);
}

.wra-blue:hover:not(:focus):not(:disabled) {
  background-color: #3571b1;
  border-color: #3571b1;
}

.wra-red {
  background-color: var(--color-wra-red);
}

.wra-red:hover:not(:focus):not(:disabled) {
  background-color: #d81f1f;
  border-color: #d81f1f;
}

.wra-green {
  background-color: #008a19;
}

.wra-green:hover:not(:focus):not(:disabled) {
  background-color: #006112;
  border-color: #006112;
}

.wra-revenue {
  background-color: var(--color-wra-revenue);
}

.wra-revenue:hover:not(:focus):not(:disabled) {
  background-color: #55507b;
  border-color: #55507b;
}

.wra-white:not(.outlined-button):not(:disabled) {
  background-color: #fff;
  color: var(--color-wra-black);
}

.wra-white:hover:not(.outlined-button):not(:focus):not(:disabled) {
  background-color: var(--color-wra-grey);
}

.default-button {
  font-size: 18px;
  padding: 10px 20px;
  line-height: 24px;
  min-height: 45px;
  --button-icon-size: 25px;
}

.small-button {
  font-size: 16px;
  padding: 5px 15px;
  line-height: 24px;
  min-height: 35px;
  --button-icon-size: 20px;
}

.large-button {
  font-size: 20px;
  padding: 15px 25px;
  line-height: 24px;
  min-height: 55px;
  --button-icon-size: 30px;
}

.outlined-button {
  background-color: transparent;
  color: var(--button-border-color);
}

button.outlined-button:hover:not(:focus):not(:disabled) {
  background-color: var(--button-border-color);
  border-color: var(--button-border-color);
  color: #fff;
}
</style>

<style>
.wra-button > .icon > svg {
  fill: currentColor;
  width: var(--button-icon-size, 25px);
  height: var(--button-icon-size, 25px);
}
</style>
