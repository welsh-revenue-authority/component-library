<template>
  <div class="wra-tag" :class="tagClass">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

export type WraTagAvailableColors = "wra-blue" | "wra-green" | "wra-grey" | "wra-yellow";

const props = withDefaults(
  defineProps<{
    content: string;
    color?: WraTagAvailableColors;
  }>(),
  {
    color: "wra-grey"
  }
);

const tagClass = computed(() => {
  const colorMap: Record<WraTagAvailableColors, string> = {
    "wra-blue": "wra-tag-blue",
    "wra-green": "wra-tag-green",
    "wra-yellow": "wra-tag-yellow",
    "wra-grey": "wra-tag-grey"
  };

  return colorMap[props.color] ?? "wra-tag-grey";
});
</script>

<style scoped>
.wra-tag {
  display: inline-block;
  padding: 4px 8px;
  align-items: center;
}

.wra-tag-blue {
  background-color: var(--color-wra-light-blue);
  color: var(--color-wra-dark-blue);
  border: 1px solid var(--color-wra-dark-blue);
}

.wra-tag-green {
  background-color: var(--color-wra-light-green);
  color: var(--color-wra-green);
  border: 1px solid var(--color-wra-green);
}

.wra-tag-yellow {
  background-color: var(--color-wra-light-yellow);
  color: var(--color-wra-dark-yellow);
  border: 1px solid var(--color-wra-dark-yellow);
}

.wra-tag-grey {
  background-color: var(--color-wra-light-grey);
  color: var(--color-wra-dark-grey);
  border: 1px solid var(--color-wra-dark-grey);
}
</style>
