<template>
  <div class="wra-inset" :class="colour">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-inset",
  props: {
    /**
     * The colour of the left border.
     * @type {string}
     * @default "wra-revenue"
     * @validator value {string} - The colour must be one of ["wra-revenue", "wra-charcoal", "wra-red", "wra-blue", "wra-green", "wra-yellow"]
     */
    colour: {
      type: String as PropType<
        | "wra-revenue"
        | "wra-charcoal"
        | "wra-red"
        | "wra-blue"
        | "wra-green"
        | "wra-yellow"
      >,
      default: "wra-revenue",
      validator(value: string) {
        return [
          "wra-revenue",
          "wra-charcoal",
          "wra-red",
          "wra-blue",
          "wra-green",
          "wra-yellow"
        ].includes(value);
      }
    }
  }
});
</script>

<style scoped>
.wra-inset {
  font-size: 16px;
  padding: 20px;
  border-left-width: 10px;
  border-left-style: solid;
}

.wra-inset.wra-revenue {
  border-left-color: var(--color-wra-revenue);
}

.wra-inset.wra-charcoal {
  border-left-color: var(--color-wra-charcoal);
}

.wra-inset.wra-red {
  border-left-color: var(--color-wra-red);
}

.wra-inset.wra-blue {
  border-left-color: var(--color-wra-blue);
}

.wra-inset.wra-green {
  border-left-color: var(--color-wra-green);
}

.wra-inset.wra-yellow {
  border-left-color: var(--color-wra-yellow);
}
</style>
