<template>
  <button
    class="wra-button"
    type="button"
    :class="buttonClass"
    :disabled="disabled"
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

<script>
export default {
  name: "wra-button",

  props: {
    /**
     * The size of the button.
     */
    size: {
      type: String,
      default: "default"
    },
    /**
     * The background colour of the button.
     */
    backgroundColor: {
      type: String,
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
    buttonClass() {
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
};
</script>

<style scoped>
button {
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: var(--color-wra-dark-grey);
  transition: all 0.3s ease;
}

button:focus {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
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

.wra-black:hover {
  background-color: var(--color-wra-dark-grey);
}

.wra-blue {
  background-color: var(--color-wra-blue);
}

.wra-blue:hover {
  background-color: #3571b1;
}

.wra-red {
  background-color: var(--color-wra-red);
}

.wra-red:hover {
  background-color: #d81f1f;
}

.wra-green {
  background-color: var(--color-wra-green);
}

.wra-green:hover {
  background-color: #008a19;
}

.wra-revenue {
  background-color: var(--color-wra-revenue);
}

.wra-revenue:hover {
  background-color: #55507b;
}

.wra-white {
  background-color: #fff;
  color: var(--color-wra-black);
  outline: 2px solid var(--color-wra-black);
}

.wra-white:hover {
  background-color: var(--color-wra-grey);
}

.wra-white:disabled {
  color: #fff;
}

.default-button {
  font-size: 16px;
  padding: 10px 20px;
  line-height: 24px;
}

.small-button {
  font-size: 14px;
  padding: 5px 15px;
  line-height: 24px;
}

.outlined-button {
  background-color: transparent;
  outline: 2px solid var(--color-prop, var(--color-wra-black));
  color: var(--color-prop, var(--color-wra-black));
}

.outlined-button:hover {
  background-color: var(--color-prop, var(--color-wra-black));
  color: #fff;
  transition: all 0.3s ease;
}
</style>

<style>
.wra-button:focus > .icon > svg {
  fill: var(--color-wra-black);
}
</style>
