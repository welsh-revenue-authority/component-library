<template>
  <button class="wra-button" type="button" :class="buttonClass">
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
    size: {
      type: String
    },
    backgroundColor: {
      type: String
    },
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
  background-color: #1f1f1f;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  opacity: 0.8;
  transition: all 0.3s ease;
}

button:focus {
  color: #1f1f1f !important;
  background-color: #ffd530 !important;
  outline: 2px solid #1f1f1f;
  outline-offset: 0px;
  border-color: #ffd530;
}

button:focus:hover {
  opacity: 1;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.prepend-icon-wrapper {
  margin-right: 10px;
}

.append-icon-wrapper {
  margin-left: 10px;
}

.wra-black {
  background-color: #1f1f1f;
}

.wra-blue {
  background-color: #0360a6;
}

.wra-red {
  background-color: #aa1111;
}

.wra-green {
  background-color: #019e1e;
}

.wra-revenue {
  background-color: #2a225b;
}

.wra-white {
  background-color: #fff;
  color: #1f1f1f;
  outline: 2px solid #1f1f1f;
}

.default-button {
  font-size: 20px;
  padding: 15px 20px;
}

.small-button {
  font-size: 14px;
  padding: 5px 10px;
}

.outlined-button {
  background-color: transparent;
  outline: 2px solid var(--color-prop, #1f1f1f);
  color: var(--color-prop, #1f1f1f);
}

.outlined-button:hover {
  opacity: 1;
  background-color: var(--color-prop, #1f1f1f);
  color: #fff;
  transition: all 0.3s ease;
}
</style>

<style>
.wra-button:focus > .icon > svg {
  fill: #1f1f1f;
}
</style>
