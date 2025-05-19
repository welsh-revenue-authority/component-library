import WraConfirmationPopup from "../components/Dialog.vue";
import WraButton from "../components/Button.vue";
import { ref, watch } from "vue";

export default {
  title: "Containment/Dialog",
  component: WraConfirmationPopup,
  tags: ["autodocs"]
};

export const Default = {
  args: {
    visible: false,
    title: "Dialog Title",
    message: "Dialog message goes here.",
    confirmText: "Confirm",
    cancelText: "Cancel"
  },
  render: (args) => ({
    components: { WraConfirmationPopup, WraButton },
    setup() {
      // Use a local ref for visibility, but keep other args reactive
      const show = ref(args.visible);
      watch(
        () => args.visible,
        (val) => {
          show.value = val;
        }
      );
      function open() {
        show.value = true;
      }
      function handleConfirm() {
        show.value = false;
      }
      function handleCancel() {
        show.value = false;
      }
      return { args, show, open, handleConfirm, handleCancel };
    },
    template: `
      <div>
        <wra-button @click="open">Open Dialog</wra-button>
        <wra-confirmation-popup
          v-bind="args"
          :visible="show"
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
  visible: false
  title: "Dialog Title"
  message: "Dialog message goes here."
  confirmText: "Confirm"
  cancelText: "Cancel"
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
    visible: false,
    title: "Are you sure?",
    message: "This action cannot be undone.",
    confirmText: "Confirm",
    cancelText: "Cancel",
    isDelete: true
  },
  render: (args) => ({
    components: { WraConfirmationPopup, WraButton },
    setup() {
      // Use a local ref for visibility, but keep other args reactive
      const show = ref(args.visible);
      watch(
        () => args.visible,
        (val) => {
          show.value = val;
        }
      );
      function open() {
        show.value = true;
      }
      function handleConfirm() {
        show.value = false;
      }
      function handleCancel() {
        show.value = false;
      }
      return { args, show, open, handleConfirm, handleCancel };
    },
    template: `
      <div>
        <wra-button @click="open">Open Delete Dialog</wra-button>
        <wra-confirmation-popup
          v-bind="args"
          :visible="show"
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
  visible: false
  title: "Are you sure?"
  message: "This action cannot be undone."
  confirmText: "Confirm"
  cancelText: "Cancel"
  isDelete: true
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
        `
      }
    }
  }
};
