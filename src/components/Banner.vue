<template>
  <div
    v-if="visible"
    class="wra-banner"
    :class="{
      'hidden-print': hiddenPrint === true,
      'new-service': newService === true,
      'closable-padding': closable === true
    }"
  >
    <div>
      <slot> </slot>
    </div>
    <div class="wra-banner-actions" v-if="$slots.actions">
      <slot name="actions"></slot>
    </div>
    <button
      v-if="closable"
      class="wra-banner-close"
      @click="closeBanner"
      aria-label="Close banner"
    >
      &times;
    </button>
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
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    closeBanner() {
      this.visible = false;
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
  position: relative;
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

.wra-banner-close {
  background: none;
  border: none;
  font-size: 26px;
  font-weight: bold;
  color: var(--color-wra-black);
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  height: 30px;
}

.wra-banner-close:hover {
  opacity: 0.6;
  transition: all 0.3s ease;
}

.wra-banner-close:focus {
  background-color: var(--color-wra-yellow);
  outline: 2px solid var(--color-wra-black);
}

.wra-banner-close:focus:hover {
  opacity: 1;
}

.closable-padding {
  padding-right: 44px;
}

@media print {
  .hidden-print {
    display: none;
  }
}
</style>
