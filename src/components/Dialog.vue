<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="overlay"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="'dialog-title'"
      :aria-describedby="'dialog-message'"
      tabindex="-1"
      ref="dialog"
      @keydown.tab.prevent="handleTab"
      @keydown.esc="cancel"
    >
      <div class="dialog">
        <wra-header size="h3" id="dialog-title">
          {{ title }}
        </wra-header>
        <p id="dialog-message">{{ message }}</p>
        <div class="dialog-buttons">
          <wra-button
            ref="confirmBtn"
            :backgroundColor="isDelete ? 'wra-red' : 'wra-green'"
            @click="confirm"
          >
            {{ confirmText }}
          </wra-button>
          <wra-button ref="cancelBtn" @click="cancel">
            {{ cancelText }}
          </wra-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import WraHeader from "./Header.vue";
import WraButton from "./Button.vue";

export default {
  name: "wra-dialog",
  components: {
    WraHeader,
    WraButton
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    confirmText: {
      type: String,
      required: true
    },
    cancelText: {
      type: String,
      required: true
    },
    isDelete: {
      type: Boolean,
      default: false
    }
  },
  emits: ["confirm", "cancel"],
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
    handleTab(e) {
      // Trap focus between the two buttons
      const focusable = [
        this.$refs.confirmBtn?.$el || this.$refs.confirmBtn,
        this.$refs.cancelBtn?.$el || this.$refs.cancelBtn
      ].filter(Boolean);
      if (!focusable.length) return;
      const index = focusable.indexOf(document.activeElement);
      if (e.shiftKey) {
        // Shift+Tab
        const prev = (index - 1 + focusable.length) % focusable.length;
        focusable[prev].focus();
      } else {
        // Tab
        const next = (index + 1) % focusable.length;
        focusable[next].focus();
      }
    }
  },
  mounted() {
    this.lastFocused = document.activeElement;
    this.$nextTick(() => {
      // Focus the confirm button when dialog opens
      const btn = this.$refs.confirmBtn?.$el || this.$refs.confirmBtn;
      if (btn && typeof btn.focus === "function") btn.focus();
    });
  },
  watch: {
    visible(val) {
      if (val) {
        // Store the currently focused element when the dialog opens
        this.lastFocused = document.activeElement;
        this.$nextTick(() => {
          const btn = this.$refs.confirmBtn?.$el || this.$refs.confirmBtn;
          if (btn && typeof btn.focus === "function") btn.focus();
        });
      } else if (
        this.lastFocused &&
        typeof this.lastFocused.focus === "function"
      ) {
        // Restore focus only if the element is still in the document
        if (document.contains(this.lastFocused)) {
          this.lastFocused.focus();
        }
      }
    }
  }
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.dialog {
  background: var(--color-wra-light-grey);
  padding: 20px 24px;
  min-width: 300px;
  max-width: 90%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.dialog-buttons {
  margin-top: 18px;
  display: flex;
  justify-content: space-evenly;
}
</style>
