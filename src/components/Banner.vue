<template>
  <div
    class="wra-banner"
    :class="{
      'hidden-print': hiddenPrint === true,
      'new-service': newService === true
    }"
  >
    <div>
      <slot> </slot>
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
    hiddenPrint: {
      type: Boolean,
      default: false
    },
    newService: {
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

.wra-banner {
  background-color: #f1f1f1;
  font-size: 18px;
  color: #1f1f1f;
  padding: 20px;
  border: none;
}

.new-service {
  background-color: #ffd530;
}

.new-service :deep(a) {
  color: #1f1f1f;
}

.new-service :deep(a):focus {
  color: #ffffff;
  background-color: #1f1f1f;
  box-shadow: 0 -4px #1f1f1f, 0 2px #ffffff;
  -webkit-box-shadow: 0 -4px #1f1f1f, 0 2px #ffffff;
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
    display: none;
  }
}
</style>
