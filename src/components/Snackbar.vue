<template>
  <transition name="snackbar">
    <div
      v-if="showSnackbar"
      role="alert"
      aria-live="polite"
      class="snackbar snackbar-flex"
      :class="{
        'border-blue': borderColor === 'blue',
        'border-red': borderColor === 'red',
        'border-yellow': borderColor === 'yellow',
        'border-green': borderColor === 'green',
      }"
    >
      <div class="snackbar-content">
        <span class="sr-only">Error:</span>
        <slot>
          {{ label }}
        </slot>
      </div>
      <button
        v-if="showClose"
        class="snackbar-close"
        @click="showSnackbar = false && $emit('update:visible', showSnackbar)"
      >
        {{ closeLabel }}
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "wra-snackbar",
  emits: ["update:visible"],
  props: {
    /** If snackbar is visible */
    visible: {
      type: Boolean,
      default: false,
    },
    /** Snackbar text content */
    label: {
      type: String,
    },
    /** Time in ms for the snackbar to disappear after appearing */
    timeout: {
      type: Number,
      validator(value) {
        return value >= 0;
      },
    },
    /** Colour of left border */
    borderColor: {
      type: String,
      validator(value) {
        return ["blue", "green", "warning", "error"].includes(value);
      },
    },
    /** Show the close dialogue */
    showClose: {
      type: Boolean,
      default: true,
    },
    /** Text in the close button */
    closeLabel: {
      type: String,
      default: "Close",
    },
  },
  data: () => ({
    showSnackbar: false,
  }),
  methods: {
    snackbarTimer(time) {
      setTimeout(() => {
        this.showSnackbar = false;
      }, time);
    },
  },
  watch: {
    visible(newValue) {
      this.showSnackbar = newValue;
      // If there is timer, run it
      if (newValue === true && this.timeout) {
        this.snackbarTimer(this.timeout);
      }
    },
  },
  created() {
    if (this.visible === true) {
      this.showSnackbar = true;
      // If there is timer, run it
      if (this.timeout) {
        this.snackbarTimer(this.timeout);
      }
    }
  },
};
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
  background: #e5e5e5;
  font-size: 20px;
  padding: 20px 20px;
  border-left: 8px solid #a5a5a5;
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

.snackbar-close {
  font-size: 20px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: #2a225b;
  cursor: pointer;
}

.snackbar-close:hover {
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.snackbar-close:focus {
  -webkit-box-shadow: 0 -4px #ffd530, 0 2px #1f1f1f;
  color: #1f1f1f;
  background-color: #ffd530;
  box-shadow: 0 -4px #ffd530, 0 2px #1f1f1f;
  outline: 2px solid transparent;
}

/* Border colours */
.border-blue {
  border-color: #0360a6;
}

.border-yellow {
  border-color: #ffd530;
}

.border-red {
  border-color: #aa1111;
}

.border-green {
  border-color: #019e1e;
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
