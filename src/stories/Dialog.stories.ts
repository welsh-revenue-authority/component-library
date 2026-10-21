import WraDialog from "../components/Dialog.vue";
import WraButton from "../components/Button.vue";
import type { Ref } from "vue";
import { ref } from "vue";
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { expect, userEvent, within } from "storybook/test";

const meta: Meta<typeof WraDialog> = {
  title: "Containment/Dialog",
  component: WraDialog
};
export default meta;

export const Default: StoryObj<typeof WraDialog> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const dialog = body.getByRole("dialog", { hidden: true });
    const openDialogButton = canvas.getByRole("button", {
      name: "Open Dialog"
    });
    await expect(dialog).not.toBeVisible();
    await expect(openDialogButton).toBeVisible();
    await userEvent.click(openDialogButton);
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveTextContent("Dialog Title");
    await expect(dialog).toHaveTextContent("Dialog message goes here.");
    await userEvent.click(
      within(dialog).getByRole("button", { name: "Confirm" })
    );
    await expect(dialog).not.toBeVisible();
  },
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const body = within(document.body);
    const dialog = body.getByRole("dialog", { hidden: true });
    await expect(dialog).not.toBeVisible();
    await userEvent.click(
      canvas.getByRole("button", { name: "Open Delete Dialog" })
    );
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveTextContent("Are you sure?");
    await expect(dialog).toHaveTextContent("This action cannot be undone.");
    await userEvent.click(
      within(dialog).getByRole("button", { name: "Confirm" })
    );
    await expect(dialog).not.toBeVisible();
  },
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
