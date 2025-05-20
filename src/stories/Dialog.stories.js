import WraConfirmationPopup from "../components/Dialog.vue";
import WraButton from "../components/Button.vue";
import { ref } from "vue";

export default {
  title: "Containment/Dialog",
  component: WraConfirmationPopup,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    title: "Dialog Title",
    message: "Dialog message goes here.",
    confirmText: "Confirm",
    cancelText: "Cancel"
  },
  render: (args) => ({
    components: { WraConfirmationPopup, WraButton },
    setup() {
      const dialogRef = ref(null);
      function open() {
        dialogRef.value?.openDialog();
      }
      function handleConfirm() {
        console.log("Confirmed");
      }
      function handleCancel() {
        console.log("Cancelled");
      }
      return { args, open, handleConfirm, handleCancel, dialogRef };
    },
    template: `
      <div>
        <wra-button @click="open">Open Dialog</wra-button>
        <wra-confirmation-popup
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
<wra-button @click="open">
  Open Dialog
</wra-button>

<wra-confirmation-popup
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

export const IsDelete = {
  args: {
    title: "Are you sure?",
    message: "This action cannot be undone.",
    confirmText: "Confirm",
    cancelText: "Cancel",
    isDelete: true
  },
  render: (args) => ({
    components: { WraConfirmationPopup, WraButton },
    setup() {
      const dialogRef = ref(null);
      function open() {
        dialogRef.value?.openDialog();
      }
      function handleConfirm() {
        console.log("Confirmed");
      }
      function handleCancel() {
        console.log("Cancelled");
      }
      return { args, open, handleConfirm, handleCancel, dialogRef };
    },
    template: `
      <div>
        <wra-button @click="open">Open Delete Dialog</wra-button>
        <wra-confirmation-popup
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
<wra-button @click="open">
  Open Delete Dialog
</wra-button>

<wra-confirmation-popup
  isDelete
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
