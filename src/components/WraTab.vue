<template>
  <button
    ref="tabButton"
    class="tab-button"
    :class="active === true && 'tab-button--active'"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

/** Works with Tabs to form a tab component */
export default defineComponent({
  name: "wra-tab",
  props: {
    label: {
      type: String as PropType<string>,
      required: true
    },
    /** Whether on active tab or not */
    active: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    focus: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  data() {
    return {
      activeTab: 0 as number
    };
  },
  watch: {
    focus(newValue: boolean) {
      if (newValue === true) {
        (this.$refs.tabButton as HTMLButtonElement)?.focus();
      }
    }
  }
});
</script>

<style scoped>
/* Reset */
* {
  box-sizing: border-box;
  border: none;
}

.tab-button {
  border-top: 6px solid var(--color-wra-blue);
  font-size: 24px;
  font-weight: bold;
  color: var(--color-wra-light-blue);
  background: var(--color-wra-dark-blue);
  padding: 20px;
  margin-left: 15px;
  margin-top: 40px;
  cursor: pointer;
}

.tab-button:hover:not(.tab-button--active) {
  background: var(--color-wra-mid-blue);
  color: #ffffff;
}

.tab-button.tab-button--active:focus {
  border-color: var(--color-wra-black);
  box-shadow:
    2px 0px 0px 0px var(--color-wra-black) inset,
    -2px -2px 0px 0px var(--color-wra-black) inset;
}

.tab-button--active {
  background: #ffffff;
  color: var(--color-wra-black);
  border-top: 6px solid var(--color-wra-mid-grey);
}

.tab-button:focus {
  border-top: 6px solid var(--color-wra-blue);
  color: var(--color-wra-black);
  background: var(--color-wra-yellow);
  box-shadow:
    2px 2px 0px 0px var(--color-wra-black) inset,
    -2px -2px 0px 0px var(--color-wra-black) inset;
  outline-style: none;
}

@media (max-width: 768px) {
  .tab-button {
    margin-left: 10px;
    margin-top: 20px;
    font-size: 20px;
    padding: 15px;
  }
}
</style>
