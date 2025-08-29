<template>
  <div class="content-section-title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "wra-content-section-title"
});
</script>

<style scoped>
.content-section-title {
  border-bottom: 2px solid var(--color-wra-grey);
  border-top: 10px solid var(--color-wra-grey);
  padding-bottom: 20px;
  padding-top: 30px;
}
</style>
