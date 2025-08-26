<template>
  <transition name="snackbar">
    <div
      v-if="showSnackbar"
      role="alert"
      aria-live="polite"
      class="snackbar snackbar-flex"
      :class="type"
    >
      <div class="snackbar-content">
        <slot>
          {{ label }}
        </slot>
      </div>
      <div
        class="close-icon-wrapper"
        tabindex="0"
        v-if="showClose"
        @click="closeSnackbar"
        @keyup.enter="closeSnackbar"
      >
        <span class="sr-only">Close</span>
        <div class="close-icon-line-one">
          <div class="close-icon-line-two"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-snackbar",
  emits: ["update:visible"],
  props: {
    /** If snackbar is visible */
    visible: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /** Snackbar text content */
    label: {
      type: String as PropType<string | undefined>
    },
    /** Time in ms for the snackbar to disappear after appearing */
    timeout: {
      type: Number as PropType<number | undefined>,
      validator(value: number) {
        return value >= 0;
      }
    },
    /** Theme of snackbar */
    type: {
      type: String as PropType<
        "wra-error" | "wra-success" | "wra-info" | "wra-warning" | string
      >,
      default: "wra-info"
    },
    /** Show the close dialogue */
    showClose: {
      type: Boolean as PropType<boolean>,
      default: true
    }
  },
  data() {
    return {
      showSnackbar: false as boolean
    };
  },
  methods: {
    snackbarTimer(time: number) {
      setTimeout(() => {
        (this as any).showSnackbar = false;
      }, time);
    },
    closeSnackbar() {
      (this as any).showSnackbar = false;
      this.$emit("update:visible", (this as any).showSnackbar);
    }
  },
  watch: {
    visible(this: any, newValue: boolean) {
      this.showSnackbar = newValue;
      // If there is timer, run it
      if (newValue === true && this.timeout) {
        this.snackbarTimer(this.timeout);
      }
    }
  },
  created(this: any) {
    if (this.visible === true) {
      this.showSnackbar = true;
      // If there is timer, run it
      if (this.timeout) {
        this.snackbarTimer(this.timeout);
      }
    }
  },
  computed: {
    class(this: any) {
      return {
        "wra-error": this.type === "wra-error",
        "wra-success": this.type === "wra-success",
        "wra-info": this.type === "wra-info",
        "wra-warning": this.type === "wra-warning"
      };
    }
  }
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding-block: 0px;
  padding-inline: 0px;
}

.snackbar {
  background: var(--color-wra-light-grey);
  font-size: 18px;
  padding: 20px;
  border-left: 5px solid var(--color-wra-dark-grey);
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 16px;
  width: 40%;
}

.snackbar-flex {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  row-gap: 10px;
  column-gap: 20px;
}

@media (max-width: 900px) {
  .snackbar-flex {
    width: 80%;
  }
}

.snackbar-content {
  text-wrap: wrap;
}

.close-icon-wrapper {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.close-icon-wrapper:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.close-icon-wrapper:focus {
  background-color: var(--color-wra-yellow);
  outline: 2px solid var(--color-wra-black);
  outline-offset: 0px;
  border-color: var(--color-wra-yellow);
}

.close-icon-wrapper:focus:hover {
  opacity: 1;
}

.close-icon-line-one {
  height: 24px;
  width: 4px;
  margin-left: 10px;
  background-color: black;
  transform: rotate(45deg);
}

.close-icon-line-two {
  height: 24px;
  width: 4px;
  background-color: black;
  transform: rotate(90deg);
}

/* Snackbar colours */
.wra-error {
  background-color: var(--color-wra-light-red);
  border-color: var(--color-wra-red);
}

.wra-success {
  background-color: var(--color-wra-light-green);
  border-color: var(--color-wra-green);
}

.wra-info {
  background-color: var(--color-wra-light-blue);
  border-color: var(--color-wra-blue);
}

.wra-warning {
  background-color: var(--color-wra-light-yellow);
  border-color: var(--color-wra-yellow);
}

/* Accessibility */
.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

/* Transitions */
.snackbar-enter-active,
.snackbar-leave-active {
  transition: opacity 0.3s ease-out;
}

.snackbar-enter-from,
.snackbar-leave-to {
  opacity: 0;
}
</style>
