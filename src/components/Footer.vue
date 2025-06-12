<template>
  <footer class="wra-footer" :class="{ 'hidden-print': hiddenPrint === true }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "wra-footer",
  props: {
    /**
     * Set to `true` to hide the app bar when printing.
     */
    hiddenPrint: {
      type: Boolean,
      default: false
    }
  }
};
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
