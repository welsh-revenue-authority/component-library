<template>
  <div>
    <button
      class="expansion-button"
      :aria-controls="'expansion-content-' + ariaTitle"
      :id="'expansion-control-' + ariaTitle"
      @click="togglePanel"
    >
      <div class="w-full">
        <div class="accordion-title pb-1">
          <slot name="title">
            {{ title }}
          </slot>
        </div>
        <div
          class="accordion-description pb-1"
          v-if="description || $slots.description"
        >
          <slot name="description">
            {{ description }}
          </slot>
        </div>
        <div class="flex items-center">
          <span class="accordion-description">
            {{ showPanel ? hideText : showText }}
          </span>
          <span class="icon-wrapper">
            <span
              class="panel-icon"
              :class="{
                'show-panel-icon': showPanel,
                'hide-panel-icon': !showPanel
              }"
            ></span>
          </span>
        </div>
      </div>
    </button>
    <transition name="slide-fade">
      <div
        class="panel-content"
        :aria-hidden="!showPanel"
        :id="'expansion-content-' + ariaTitle"
        v-if="showPanel"
      >
        <div class="inner-panel">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-content-accordion",
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * Description text displayed below the title
     */
    description: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * A unique string used to generate ARIA attributes for accessibility.
     */
    ariaTitle: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * Text to display when the panel is collapsed
     */
    showText: {
      type: String as PropType<string>,
      default: "Show"
    },
    /**
     * Text to display when the panel is expanded
     */
    hideText: {
      type: String as PropType<string>,
      default: "Hide"
    },
    /**
     * If set, overrides the expanded/collapsed state programmatically
     */
    expandOverride: {
      type: Boolean as PropType<boolean>,
      default: undefined
    }
  },
  data() {
    return {
      internalPanel: false as boolean
    };
  },
  computed: {
    showPanel(): boolean {
      // If expandOverride is explicitly set, use it; otherwise use internal state
      return this.expandOverride !== undefined
        ? this.expandOverride
        : this.internalPanel;
    }
  },
  methods: {
    togglePanel(): void {
      // Only update internal state if not controlled by expandOverride
      if (this.expandOverride === undefined) {
        this.internalPanel = !this.internalPanel;
        this.$emit("update:expanded", this.internalPanel);
      } else {
        // Emit event so parent can update expandOverride
        this.$emit("update:expanded", !this.expandOverride);
      }
    }
  }
});
</script>

<style scoped>
.panel-icon {
  content: " ";
  display: inline-block;
  border: solid var(--color-wra-black);
  border-width: 3px 3px 0px 0px;
  width: 6px;
  height: 6px;
  padding: 0;
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
  display: block;
}

.accordion-title {
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  color: var(--color-wra-blue);
}

button:focus .accordion-title {
  color: var(--color-wra-black);
}

.accordion-description {
  font-size: 14px;
  line-height: 20px;
  color: var(--color-wra-black);
}

button {
  padding: 15px 20px;
  background-color: var(--color-wra-grey);
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

button:focus {
  color: var(--color-wra-black) !important;
  background-color: var(--color-wra-yellow) !important;
  outline: 2px solid var(--color-wra-black);
  outline-offset: -2px;
  border-color: var(--color-wra-yellow);
}

button:focus:hover {
  opacity: 1;
}

.panel-content {
  display: grid;
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
