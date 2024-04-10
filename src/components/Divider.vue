<template>
  <hr
    :role="role"
    :style="{ borderTopWidth: thickness + 'px', borderColor: color }"
  />
</template>

<script>
export default {
  name: "wra-divider",
  props: {
    /** Thickness of the divider */
    thickness: {
      type: Number,
      default: 4,
      validator(value) {
        return value >= 0;
      },
    },
    /** Divider colour */
    color: {
      type: String,
    },
    /** Aria role for the divider */
    role: {
      type: String,
      default: "presentation",
    },
  },
  data() {
    return {};
  },
};
</script>
