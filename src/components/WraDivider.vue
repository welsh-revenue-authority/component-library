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

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-divider",
  props: {
    /** Thickness of the divider */
    thickness: {
      type: String as PropType<"large" | "medium" | "small">,
      default: "medium",
      validator(value: string) {
        if (value == "large" || value == "medium" || value == "small") {
          return true;
        } else {
          return false;
        }
      }
    },
    /** Aria role for the divider */
    role: {
      type: String as PropType<string>,
      default: "presentation"
    }
  },
  data() {
    return {};
  }
});
</script>

<style scoped>
hr {
  margin: 0px;
}

.wra-divider {
  border: 3px solid var(--color-wra-grey);
}

.wra-divider-large {
  border: 4px solid var(--color-wra-grey);
}

.wra-divider-small {
  border: 2px solid var(--color-wra-grey);
}
</style>
