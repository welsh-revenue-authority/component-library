<template>
  <div>
    <button
      class="expansion-button"
      :aria-controls="'expansion-content-' + ariaTitle"
      :id="'expansion-control-' + ariaTitle"
      @click="togglePanel"
      :style="style"
    >
      {{ title }}
      <span class="icon-wrapper">
        <span
          class="panel-icon"
          :class="{
            'show-panel-icon': showPanel,
            'hide-panel-icon': !showPanel
          }"
        ></span>
      </span>
    </button>
    <transition name="slide-fade">
      <div
        class="panel-content"
        :aria-hidden="!showPanel"
        :id="'content-' + ariaTitle"
        v-if="showPanel"
      >
        <div class="inner-panel">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "wra-expansion-panel",
  props: {
    title: {
      type: String,
      required: true
    },
    ariaTitle: {
      type: String,
      required: true
    },
    color: {
      type: String
    }
  },
  data() {
    return {
      showPanel: false
    };
  },
  computed: {
    style() {
      return {
        color: this.color
      };
    }
  },
  methods: {
    togglePanel() {
      this.showPanel = !this.showPanel;
    }
  }
};
</script>

<style scoped>
.panel-icon {
  content: " ";
  display: inline-block;
  border: solid #1f1f1f;
  border-width: 3px 3px 0px 0px;
  padding: 4px;
  vertical-align: middle;
  transition: transform 0.2s ease-out;
}

.icon-wrapper {
  margin-left: 8px;
}

.show-panel-icon {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  margin-top: 3px;
}

.hide-panel-icon {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  margin-top: -5px;
}

.expansion-button {
  display: flex;
  justify-content: space-between;
}

button {
  font-size: 18px;
  font-weight: bold;
  padding: 15px 20px;
  background-color: transparent;
  color: #2a225b;
  border: none;
  border-left: 2px solid #b5b5b5;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

button:hover {
  opacity: 0.8;
}

button:focus {
  color: #1f1f1f !important;
  background-color: #ffd530 !important;
  outline: 2px solid #1f1f1f;
  outline-offset: -2px;
  border-color: #ffd530;
}

button:focus:hover {
  opacity: 1;
}

.panel-content {
  display: grid;
  border-left: 2px solid #b5b5b5;
  background: transparent;
  padding: 15px 20px;
  grid-template-rows: 1fr;
}

.inner-panel {
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: grid-template-rows 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: grid-template-rows 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  grid-template-rows: 0fr;
}
</style>
