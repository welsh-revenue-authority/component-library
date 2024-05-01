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

<script>
export default {
  name: "wra-icon",
  props: {
    /** Name of icon from material design icons by  pictogrammers */
    icon: {
      type: String,
      required: true,
    },
    /** Width of icon */
    width: {
      type: Number,
      default: 24,
    },
    /** Height of icon */
    height: {
      type: Number,
      default: 24,
    },
    /** Override default viewbox, the size and postion of the SVG, that is calculated from height and width. */
    viewBox: {
      type: String,
      default: "0 0 24 24",
    },
    /** Defines the colour of the outline of the icon; */
    stroke: {
      type: String,
    },
    /**  Defines the colour of the icon */
    fill: {
      type: String,
    },
  },
};
</script>
