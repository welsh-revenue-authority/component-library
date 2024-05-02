<template>
  <footer class="wra-footer" :class="{ 'hidden-print': hiddenPrint === true }">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: "wra-footer",
  props: {
    /** Display the footer when printed */
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
  background-color: #f1f1f1;
  padding: 70px 20px 50px 20px;
}

@media print {
  .hidden-print {
    display: none;
  }
}
</style>
