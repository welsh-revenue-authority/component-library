<template>
  <footer class="wra-footer" :class="{ 'hidden-print': hiddenPrint === true }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-footer",
  props: {
    /**
     * If true, the footer will be hidden when printing the page.
     */
    hiddenPrint: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  }
});
</script>

<style scoped>
.wra-footer {
  flex-grow: 0;
  background-color: var(--color-wra-light-grey);
  padding: 70px 20px 40px 20px;
}

@media print {
  .hidden-print {
    display: none;
  }
}
</style>
