<template>
  <hr
    :role="role"
    :class="{
      'wra-divider-large': thickness === 'large',
      'wra-divider': thickness === 'medium',
      'wra-divider-small': thickness === 'small',
    }"
  />
</template>

<script>
export default {
  name: "wra-divider",
  props: {
    /** Thickness of the divider */
    thickness: {
      type: String,
      default: "medium",
      validator(value) {
        return ["large", "small"].includes(value);
      },
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

<style scoped>
.wra-divider {
  border-top-width: 4px;
}

.wra-divider-large {
  border-top-width: 8px;
}

.wra-divider-small {
  border-top-width: 2px;
}
</style>
