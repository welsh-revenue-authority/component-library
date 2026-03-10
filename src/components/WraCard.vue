<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "wra-card"
});
</script>

<style scoped>
.card {
  background-color: var(--color-wra-light-grey);
  padding: 20px 24px;
}
</style>
