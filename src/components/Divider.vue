<template>
  <hr
    role="presentation"
    :style="{ borderTopWidth: thickness + 'px', borderColor: color }"
  />
</template>

<script>
export default {
  name: "wra-divider",
  props: {
    thickness: {
      type: Number,
      default: 4,
      validator(value) {
        return value >= 0;
      },
    },
    color: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
