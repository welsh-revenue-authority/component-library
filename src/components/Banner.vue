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
  background-color: var(--color-wra-light-grey);
  font-size: 18px;
  color: var(--color-wra-black);
  padding: 20px;
  border: none;
}

.new-service {
  background-color: var(--color-wra-yellow);
}

.new-service :deep(a) {
  color: var(--color-wra-black);
}

.new-service :deep(a):focus {
  color: #ffffff;
  background-color: var(--color-wra-black);
  box-shadow:
    0 -4px var(--color-wra-black),
    0 2px #ffffff;
  -webkit-box-shadow:
    0 -4px var(--color-wra-black),
    0 2px #ffffff;
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
