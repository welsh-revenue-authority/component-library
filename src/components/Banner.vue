<template>
  <div class="wra-banner" :class="{ hiddenPrint: hiddenPrint === true }">
    <div>
      <slot>
        <p>{{ text }}</p>
      </slot>
    </div>
    <div class="wra-banner-actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "wra-banner",
  props: {
    /** Fallback prop for when slot is not used */
    text: {
      type: Array,
      required: true,
    },
    hidenPrint: {
      type: Boolean,
      default: false,
    },
  },
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

.wra-banner {
  background-color: #f1f1f1;
  font-size: 18px;
  color: #1f1f1f;
  padding: 20px;
  border: none;
}

.wra-banner-actions {
  padding-top: 16px;
  display: flex;
  row-gap: 10px;
  column-gap: 14px;
  flex-wrap: wrap;
}

@media print {
  .hidden-print {
    display: none !important;
  }
}
</style>
