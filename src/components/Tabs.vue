<template>
  <div class="tabs">
    <tab
      v-for="(label, index) in options"
      :tabindex="index === 0 ? 0 : -1"
      :label="label"
      :active="index === activeTab"
      :focus="index === focusTab"
      @click="onTabClick(index)"
      @keydown.enter="onTabClick(index)"
      @keydown.space="onTabClick(index)"
      @keydown.left="onKeyLeft(index)"
      @keydown.right="onKeyRight(index)"
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
      focusTab: 0,
    };
  },
  methods: {
    onTabClick(index) {
      this.activeTab = index;
      this.focusTab = index;
      this.$emit("update:modelValue", this.activeTab);
    },
    onKeyLeft() {
      if (this.focusTab > 0) {
        this.focusTab--;
      }
    },
    onKeyRight() {
      if (this.focusTab < this.options.length - 1) {
        this.focusTab++;
      }
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
  width: 100%;
}
</style>
