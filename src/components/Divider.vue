<template>
  <hr
    :role="role"
    :class="{
      'wra-divider-large': thickness === 'large',
      'wra-divider': thickness === 'medium',
      'wra-divider-small': thickness === 'small'
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
        if (value == "large" || value == "medium" || value == "small") {
          return true;
        } else {
          return false;
        }
      }
    },
    /** Aria role for the divider */
    role: {
      type: String,
      default: "presentation"
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
hr {
  margin: 0px;
}

.wra-divider {
  border: 3px solid #e5e5e5;
}

.wra-divider-large {
  border: 4px solid #e5e5e5;
}

.wra-divider-small {
  border: 2px solid #e5e5e5;
}
</style>
