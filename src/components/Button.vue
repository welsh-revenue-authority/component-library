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
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      class: computed(() => `${props.size}-button`),
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
}

button:focus {
  color: #1f1f1f;
  background-color: #ffd530;
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
</style>
