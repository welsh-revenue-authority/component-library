<template>
  <span class="wra-status-tag">
    {{ label ?? variant }}
  </span>
</template>

<script setup lang="ts">
export type WraStatusTagVariant = "alpha" | "beta" | "live" | "retired";

const props = defineProps<{
  /**
   * The service or feature phase to display.
   */
  variant: WraStatusTagVariant;
  /**
   * Overrides the displayed label. Defaults to the variant name.
   */
  label?: string;
}>();
</script>

<style scoped>
.wra-status-tag {
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 20px;
  vertical-align: middle;
  background-color: var(--color-wra-blue);
  color: white;
}
</style>
