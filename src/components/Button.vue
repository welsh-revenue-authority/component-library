<template>
  <button type="button" :class="class" :style="style">
    <span
      :class="{
        'prepend-icon-wrapper': prependIcon
      }"
    >
      <span v-if="prependIcon" class="icon back-icon"></span
    ></span>
    <slot></slot>
    <span
      :class="{
        'append-icon-wrapper': appendIcon
      }"
    >
      <span v-if="appendIcon" class="icon next-icon"></span
    ></span>
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
    color: {
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
    class() {
      return {
        "outlined-button": this.outlined,
        [`${this.size || "default"}-button`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
        "--color-prop": this.color
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

.icon {
  content: " ";
  display: inline-block;
  border: solid currentColor;
  padding: 4px;
  vertical-align: middle;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-bottom: 3px;
}

.back-icon {
  border-width: 3px 3px 0px 0px;
}

.next-icon {
  border-width: 0px 0px 3px 3px;
}

.prepend-icon-wrapper {
  margin-right: 15px;
}

.append-icon-wrapper {
  margin-left: 15px;
}
</style>
