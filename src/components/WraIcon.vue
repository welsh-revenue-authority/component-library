<template>
  <svg
    :width="width + 'px'"
    :height="height + 'px'"
    :viewBox="viewBox"
    :stroke="stroke"
    :fill="fill"
  >
    <path :d="icon" width="100%" height="100%" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-icon",
  props: {
    /** Name of icon from material design icons by  pictogrammers */
    icon: {
      type: String as PropType<string>,
      required: true
    },
    /** Width of icon */
    width: {
      type: Number as PropType<number>,
      default: 24
    },
    /** Height of icon */
    height: {
      type: Number as PropType<number>,
      default: 24
    },
    /** Override default viewbox, the size and postion of the SVG, that is calculated from height and width */
    viewBox: {
      type: String as PropType<string>,
      default: "0 0 24 24"
    },
    /** Defines the colour of the outline of the icon */
    stroke: {
      type: String as PropType<string>
    },
    /**  Defines the colour of the icon */
    fill: {
      type: String as PropType<string>
    }
  }
});
</script>
