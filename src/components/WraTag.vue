<template>
  <div class="wra-tag" :class="color">
    <slot>
      {{ content }}
    </slot>
  </div>
</template>

<script setup lang="ts">
export type WraTagAvailableColors = "wra-tag-blue" | "wra-tag-green" | "wra-tag-grey";

withDefaults(
  defineProps<{
    content: string;
    color?: WraTagAvailableColors;
  }>(),
  {
    color: "wra-tag-grey"
  }
);
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

.wra-tag-grey {
  background-color: var(--color-wra-light-grey);
  color: var(--color-wra-dark-grey);
  border: 1px solid var(--color-wra-dark-grey);
}
</style>
