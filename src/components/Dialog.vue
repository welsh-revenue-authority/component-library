<template>
  <teleport to="body">
    <dialog
      ref="dialog"
      class="dialog-class"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-message"
      tabindex="-1"
      @close="closeDialog"
      @keydown.tab.prevent="handleTab"
      @keydown.esc="cancel"
    >
      <div class="dialog-content">
        <wra-header size="h3" id="dialog-title">
          {{ title }}
        </wra-header>
        <p id="dialog-message" class="mt-4">{{ message }}</p>
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
    </dialog>
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
  emits: ["confirm", "cancel", "close"],
  methods: {
    openDialog() {
      this.$refs.dialog.showModal();
      this.focusConfirm();
    },
    closeDialog() {
      this.$emit("close");
      this.restoreFocus();
    },
    confirm() {
      this.$refs.dialog.close();
      this.$emit("confirm");
    },
    cancel() {
      this.$refs.dialog.close();
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
    },
    focusConfirm() {
      this.$nextTick(() => {
        // Focus the confirm button when dialog opens
        const btn = this.$refs.confirmBtn?.$el || this.$refs.confirmBtn;
        if (btn && typeof btn.focus === "function") btn.focus();
      });
    },
    restoreFocus() {
      if (
        this.lastFocused &&
        typeof this.lastFocused.focus === "function" &&
        document.contains(this.lastFocused)
      ) {
        // Restore focus only if the element is still in the document
        this.lastFocused.focus();
      }
    }
  },
  mounted() {
    this.lastFocused = document.activeElement;
  }
};
</script>

<style scoped>
.dialog-class {
  z-index: 9999;
}

.dialog-content {
  min-width: 300px;
  max-width: 90vw;
  text-align: center;
}

.dialog-buttons {
  margin-top: 16px;
  display: flex;
  justify-content: space-evenly;
}
</style>

<style>
dialog.dialog-class::backdrop {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
}
</style>
