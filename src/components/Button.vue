<template>
  <button type="button" :class="class" :style="style">
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "wra-button",

  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
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
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      class: computed(() => ({
        "outlined-button": props.outlined,
        [`${props.size || "default"}-button`]: true
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
        color: props.color
      }))
    };
  }
};
</script>

<style scoped>
button {
  background-color: #1f1f1f;
  color: #fff;
  font-weight: bold;
  border: none;
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
  outline: 2px solid #1f1f1f;
  color: #1f1f1f;
}

.outlined-button:hover {
  opacity: 1;
  background-color: #1f1f1f;
  color: #fff;
  transition: all 0.3s ease;
}
</style>
