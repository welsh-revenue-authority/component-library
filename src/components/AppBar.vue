<template>
  <div
    class="wra-app-bar"
    :class="{
      'hidden-print': hiddenPrint === true
    }"
  >
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "wra-app-bar",
  props: {
    hiddenPrint: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin-block-start: 0px;
  margin-block-end: 0px;
}

.wra-app-bar {
  background-color: var(--color-wra-charcoal);
  font-size: 18px;
  color: #fff;
  padding: 20px;
  border: none;
  height: 75px;
}

@media print {
  .hidden-print {
    display: none;
  }
}
</style>
