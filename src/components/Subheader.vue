<template>
  <div class="subheader" :style="style">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-subheader",

  props: {
    /**
     * The text colour of the subheader.
     */
    color: {
      type: String as PropType<string>,
      default: "#000000"
    }
  },

  computed: {
    style(): { color: string } {
      return {
        color: this.color as string
      };
    }
  }
});
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
