import WraDialog from "../components/Dialog.vue";
import WraButton from "../components/Button.vue";
import { ref, Ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof WraDialog> = {
  title: "Containment/Dialog",
  component: WraDialog
};
export default meta;

export const Default: StoryObj<typeof WraDialog> = {
  args: {
    title: "Dialog Title",
    message: "Dialog message goes here.",
    confirmText: "Confirm",
    cancelText: "Cancel"
  },
  render: (args) => ({
    components: { WraDialog, WraButton },
    setup() {
      const dialogRef: Ref<InstanceType<typeof WraDialog> | null> = ref(null);
      function open(): void {
        dialogRef.value?.openDialog();
      }
      function handleConfirm(): void {
        console.log("Confirmed");
      }
      function handleCancel(): void {
        console.log("Cancelled");
      }
      return { args, open, handleConfirm, handleCancel, dialogRef };
    },
    template: `
      <div>
        <wra-button @click="open">Open Dialog</wra-button>
        <wra-dialog
          ref="dialogRef"
          v-bind="args"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button @click="openDialog">
  Open Dialog
</wra-button>

<wra-dialog
  ref="dialogRef"
  title="Dialog Title"
  message="Dialog message goes here."
  confirmText="Confirm"
  cancelText="Cancel"
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
        `
      }
    }
  }
};

export const IsDelete: StoryObj<typeof WraDialog> = {
  args: {
    title: "Are you sure?",
    message: "This action cannot be undone.",
    confirmText: "Confirm",
    cancelText: "Cancel",
    isDelete: true
  },
  render: (args) => ({
    components: { WraDialog, WraButton },
    setup() {
      const dialogRef: Ref<InstanceType<typeof WraDialog> | null> = ref(null);
      function open(): void {
        dialogRef.value?.openDialog();
      }
      function handleConfirm(): void {
        console.log("Confirmed");
      }
      function handleCancel(): void {
        console.log("Cancelled");
      }
      return { args, open, handleConfirm, handleCancel, dialogRef };
    },
    template: `
      <div>
        <wra-button @click="open">Open Delete Dialog</wra-button>
        <wra-dialog
          ref="dialogRef"
          v-bind="args"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        />
      </div>
    `
  }),
  parameters: {
    docs: {
      source: {
        code: `
<wra-button @click="openDialog">
  Open Delete Dialog
</wra-button>

<wra-dialog
  isDelete
  ref="dialogRef"
  title="Are you sure?"
  message="This action cannot be undone."
  confirmText="Confirm"
  cancelText="Cancel"
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
        `
      }
    }
  }
};
