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
.tab-button {
  font-weight: bold;
  border: none;
  padding: 16px;
  font-size: 20px;
  color: #c2e0fc;
  background: #1f446d;
}

.tab-button:hover {
  background: #3b7dc5;
  color: #ffffff;
}

.tab-button--active {
  background: #ffffff;
  color: #1f1f1f;
}

.tab-button--active:hover {
  background: #e5e5e5;
  color: #1f1f1f;
}
</style>
