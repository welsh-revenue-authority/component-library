<template>
  <li
    class="wra-task-list-item"
    :class="{ 'wra-task-list-item-with-status': $slots.status }"
  >
    <div>
      <slot></slot>
      <WraTaskListHint v-if="$slots.hint">
        <slot name="hint"></slot>
      </WraTaskListHint>
    </div>
    <slot name="status"></slot>
  </li>
</template>

<script setup lang="ts">
import WraTaskListHint from "@/components/WraTaskListHint.vue";
</script>

<style scoped>
.wra-task-list-item:first-child {
  border-top: 1px solid var(--color-wra-mid-grey);
}

.wra-task-list-item {
  border-bottom: 1px solid var(--color-wra-mid-grey);
  padding: 12px 0;
}

.wra-task-list-item-with-status {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
</style>
