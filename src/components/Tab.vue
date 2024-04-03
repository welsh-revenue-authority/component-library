<template>
  <button class="tab-button" :class="active === true && 'tab-button--active'">
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
      required: true,
    },
    /** Whether on active tab or not */
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style scoped>
/* Reset */
* {
  box-sizing: border-box;
  border: none;
}

.tab-button {
  border-top: 6px #0360a6 solid;
  font-size: 24px;
  font-weight: bold;
  color: #c2e0fc;
  background: #1f446d;
  padding: 20px;
  margin-left: 15px;
  margin-top: 40px;
}

.tab-button:hover {
  background: #3b7dc5;
  color: #ffffff;
}

.tab-button--active {
  background: #ffffff;
  color: #1f1f1f;
  border-top: 6px #cccccc solid;
}

.tab-button--active:hover {
  background: #e5e5e5;
  color: #1f1f1f;
}

.tab-button:focus {
  border-top: 6px #0360a6 solid;
  color: #1f1f1f;
  background: #ffd530;
  box-shadow: 2px 2px 0px 0px #1f1f1f inset, -2px -2px 0px 0px #1f1f1f inset;
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
