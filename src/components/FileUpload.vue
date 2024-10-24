<template>
  <Transition name="error">
    <ValidationTooltip
      v-if="error"
      class="file-upload-error-box"
      type="wra-error"
    >
      {{ errorMessage }}
    </ValidationTooltip>
  </Transition>

  <div class="file-upload-label" :for="id">
    {{ label }}
  </div>

  <div class="file-upload-wrapper">
    <Button
      size="small"
      :backgroundColor="backgroundColor"
      @click="triggerFileInput"
      >{{ buttonText }}</Button
    >
    <input
      type="file"
      ref="fileInput"
      :id="id"
      :accept="accept"
      :capture="capture"
      :multiple="multiple"
      @change="handleFileChange"
    />
    <span class="file-name">{{ fileName }}</span>
  </div>
</template>

<script>
import ValidationTooltip from "./ValidationTooltip.vue";
import Button from "./Button.vue";

/**
 * FileUpload component
 *
 * This component provides a file upload input with optional label and validation tooltip.
 * It emits a "change" event when a file is selected.
 */
export default {
  name: "file-upload",
  emits: ["change"],
  components: {
    ValidationTooltip,
    Button
  },
  props: {
    /**
     * The ID for the file input.
     * @type {string}
     * @default "file-upload"
     */
    id: {
      type: String,
      default: "file-upload"
    },
    /**
     * The accepted file types for the file input.
     * @type {string}
     */
    accept: {
      type: String
    },
    /**
     * The capture attribute for the file input, specifying the type of media to capture.
     * @type {string}
     * @validator value {string} - The capture value must be one of ["user", "environment"].
     */
    capture: {
      type: String,
      validator(value) {
        return ["user", "environment"].includes(value);
      }
    },
    /**
     * Whether multiple files can be selected.
     * @type {boolean}
     * @default false
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * The label for the file input.
     * @type {string}
     * @default "Upload File"
     */
    label: {
      type: String,
      default: "File upload label"
    },
    /**
     * The background colour of the button.
     * @type {string}
     * @default "wra-revenue"
     */
    backgroundColor: {
      type: String,
      default: ""
    },
    /**
     * The text for the button.
     * @type {string}
     * @default "Upload file"
     */
    buttonText: {
      type: String,
      default: "Upload file"
    },
    /**
     * Whether there is an error with the file input.
     * @type {boolean}
     * @default false
     */
    error: {
      type: Boolean,
      default: false
    },
    /**
     * The error message to display.
     * @type {string}
     * @default "An error has occurred"
     */
    errorMessage: {
      type: String,
      default: "An error has occurred"
    }
  },
  data() {
    return {
      fileName: "No file chosen"
    };
  },
  methods: {
    handleFileChange(event) {
      const files = event.target.files;
      if (files.length > 0) {
        // FileList does not behave like a normal array so must convert
        this.fileName = Array.from(files)
          .map((x) => x.name)
          .join(", ");
      } else {
        this.fileName = "No file chosen";
      }
      this.$emit("change", files);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    }
  }
};
</script>

<style scoped>
.file-upload-wrapper {
  display: flex;
  align-items: center;
}

.file-upload-wrapper input[type="file"] {
  display: none;
}

.file-upload-label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

.file-name {
  margin: 0px 10px;
  font-size: 14px;
}

.file-upload-error-box {
  margin-bottom: 16px;
}

/* Transitions */
.error-enter-active,
.error-leave-active {
  transition: opacity 0.3s ease-out;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}
</style>
