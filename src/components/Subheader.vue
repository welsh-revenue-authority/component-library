<template>
  <div class="subheader" :style="style">
    <slot></slot>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "wra-subheader",

  props: {
    color: {
      type: String
    }
  },

  setup(props) {
    props = reactive(props);
    return {
      style: computed(() => ({
        color: props.color
      }))
    };
  }
};
</script>

<style scoped>
.subheader {
  font-size: 14px;
  letter-spacing: 0.08em;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0px;
  height: unset;
}
</style>
