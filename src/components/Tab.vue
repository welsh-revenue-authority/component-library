<template>
  <button
    ref="tabButton"
    class="tab-button"
    :class="active === true && 'tab-button--active'"
  >
    {{ label }}
  </button>
</template>

<script>
/** Works with Tabs to form a tab component */
export default {
  name: "wra-tab",
  props: {
    label: {
      type: String,
      required: true
    },
    /** Whether on active tab or not */
    active: {
      type: Boolean,
      default: false
    },
    focus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  watch: {
    focus(newValue) {
      if (newValue === true) {
        this.$refs.tabButton.focus();
      }
    }
  }
};
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
  background: #1f446d;
  padding: 20px;
  margin-left: 15px;
  margin-top: 40px;
  cursor: pointer;
}

.tab-button:hover:not(.tab-button--active) {
  background: #3b7dc5;
  color: #ffffff;
}

.tab-button.tab-button--active:focus {
  border-color: var(--color-wra-black);
  box-shadow: 2px 0px 0px 0px var(--color-wra-black) inset, -2px -2px 0px 0px var(--color-wra-black) inset;
}

.tab-button--active {
  background: #ffffff;
  color: var(--color-wra-black);
  border-top: 6px solid var(--color-wra-mid-grey);
}

.tab-button:focus {
  border-top: 6px solid var(--color-wra-blue);
  color: var(--color-wra-black);
  background: #ffd530;
  box-shadow: 2px 2px 0px 0px var(--color-wra-black) inset, -2px -2px 0px 0px var(--color-wra-black) inset;
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
