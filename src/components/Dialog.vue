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

<script lang="ts">
import { defineComponent, PropType, nextTick } from "vue";
import WraHeader from "./Header.vue";
import WraButton from "./Button.vue";

export default defineComponent({
  name: "wra-dialog",
  components: {
    WraHeader,
    WraButton
  },
  props: {
    /**
     * The title text displayed at the top of the dialog.
     */
    title: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The main message or content displayed in the dialog body.
     */
    message: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The text label for the confirm button.
     */
    confirmText: {
      type: String as PropType<string>,
      required: true,
      default: "Confirm"
    },
    /**
     * The text label for the cancel button.
     */
    cancelText: {
      type: String as PropType<string>,
      required: true,
      default: "Cancel"
    },
    /**
     * If true, styles the confirm button as a destructive action (red for delete).
     */
    isDelete: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ["confirm", "cancel", "close"],
  data() {
    return {
      lastFocused: null as Element | null
    };
  },
  methods: {
    openDialog(): void {
      (this.$refs.dialog as HTMLDialogElement).showModal();
      this.focusConfirm();
    },
    closeDialog(): void {
      this.$emit("close");
      this.restoreFocus();
    },
    confirm(): void {
      (this.$refs.dialog as HTMLDialogElement).close();
      this.$emit("confirm");
    },
    cancel(): void {
      (this.$refs.dialog as HTMLDialogElement).close();
      this.$emit("cancel");
    },
    handleTab(e: KeyboardEvent): void {
      // Trap focus between the two buttons
      const confirmBtn =
        (this.$refs.confirmBtn as any)?.$el || this.$refs.confirmBtn;
      const cancelBtn =
        (this.$refs.cancelBtn as any)?.$el || this.$refs.cancelBtn;
      const focusable: HTMLElement[] = [confirmBtn, cancelBtn].filter(Boolean);
      if (!focusable.length) return;
      const index = focusable.indexOf(document.activeElement as HTMLElement);
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
    focusConfirm(): void {
      nextTick(() => {
        // Focus the confirm button when dialog opens
        const btn =
          (this.$refs.confirmBtn as any)?.$el || this.$refs.confirmBtn;
        if (btn && typeof btn.focus === "function") btn.focus();
      });
    },
    restoreFocus(): void {
      if (
        this.lastFocused &&
        typeof (this.lastFocused as HTMLElement).focus === "function" &&
        document.contains(this.lastFocused)
      ) {
        // Restore focus only if the element is still in the document
        (this.lastFocused as HTMLElement).focus();
      }
    }
  },
  mounted() {
    this.lastFocused = document.activeElement;
  }
});
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
