<template>
  <div class="tabs">
    <tab
      v-for="(label, index) in options"
      :tabindex="index === 0 ? 0 : -1"
      :label="label"
      :active="index === activeTab"
      :focus="index === focusTab"
      @click="onTabClick(index)"
      @focus="focusTab = index"
      @keydown.enter="onTabClick(index)"
      @keydown.space="onTabClick(index)"
      @keydown.left="onKeyLeft"
      @keydown.right="onKeyRight"
    ></tab>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Tab from "./Tab.vue";

export default defineComponent({
  name: "wra-tabs",
  emits: ["update:modelValue"],
  props: {
    /** The currently selected tab, starts from 0 */
    modelValue: {
      type: Number as PropType<number>,
      default: 0
    },
    /** Tabs to display */
    options: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  components: {
    Tab
  },
  data() {
    return {
      activeTab: 0 as number,
      focusTab: 0 as number
    };
  },
  methods: {
    onTabClick(index: number) {
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
    }
  },
  created() {
    this.activeTab = this.modelValue;
  }
});
</script>

<style scoped>
.tabs {
  background-color: var(--color-wra-blue);
  width: 100%;
}
</style>
