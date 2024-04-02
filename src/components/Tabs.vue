<template>
  <div class="tabs">
    <tab
      v-for="(label, index) in options"
      :label="label"
      @click="onTabClick(index)"
    ></tab>
  </div>
</template>

<script>
import Tab from "./Tab.vue";

export default {
  name: "wra-tabs",
  props: {
    /** Tabs to display */
    options: {
      type: Array,
      // TODO: Add validation to options
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
      console.log(this.activeTab);
    },
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
