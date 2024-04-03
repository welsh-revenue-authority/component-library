<template>
  <div class="tabs">
    <tab
      v-for="(label, index) in options"
      :label="label"
      :active="index === activeTab"
      @click="onTabClick(index)"
    ></tab>
  </div>
</template>

<script>
import Tab from "./Tab.vue";

export default {
  name: "wra-tabs",
  emits: "update:modelValue",
  props: {
    /** The currently selected tab, starts from 0 */
    modelValue: {
      type: Number,
      default: 0,
    },
    /** Tabs to display */
    options: {
      type: Array,
      required: true,
    },
  },
  components: {
    Tab,
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    onTabClick(index) {
      this.activeTab = index;
      this.$emit("update:modelValue", this.activeTab);
    },
  },
  created() {
    this.activeTab = this.modelValue;
  },
};
</script>

<style scoped>
.tabs {
  background-color: #0360a6;
  padding-top: 20px;
  padding-left: 12px;
  width: 100%;
}

.tabs > .tab-button:last-of-type {
  margin-right: 0px;
}

.tabs > .tab-button {
  margin-right: 12px;
}
</style>
