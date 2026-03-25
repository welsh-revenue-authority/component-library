<template>
  <WraHeader :size="size">
    <span class="wra-heading-caption__caption">{{ caption }}</span>
    <slot></slot>
  </WraHeader>
</template>
<script setup lang="ts">
import WraHeader from "@/components/Header.vue";

defineOptions({ name: "wra-heading-caption" });

defineProps<{
  /** The heading level to render (h1 - h6). */
  size: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** The caption text displayed above the heading. */
  caption: string;
}>();
</script>
<style scoped>
.wra-heading-caption__caption {
  display: block;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-wra-dark-grey);
  margin-bottom: 4px;
}
</style>
