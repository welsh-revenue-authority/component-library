<template>
  <div class="file-upload-wrapper">
    <Transition name="error">
      <ValidationTooltip
        v-if="error"
        class="file-upload-error-box"
        type="wra-error"
      >
        {{ errorMessage }}
      </ValidationTooltip>
    </Transition>

    <label class="file-upload-label" :for="id">
      {{ label }}
    </label>
    <input
      type="file"
      class="file-upload"
      :id="id"
      @change="$emit('change', $event.target.files)"
    />
  </div>
</template>

<script>
import ValidationTooltip from "./ValidationTooltip.vue";

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
    ValidationTooltip
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
     * The label for the file input.
     * @type {string}
     * @default "Upload File"
     */
    label: {
      type: String,
      default: "Upload File"
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
     * @default "An error occurred"
     */
    errorMessage: {
      type: String,
      default: "An error occurred"
    }
  },
  computed: {
    searchIcon() {
      return mdiUpload;
    }
  }
};
</script>

<style scoped>
.file-upload-label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
}

.file-upload {
  font-size: 16px;
}

input[type="file"]::file-selector-button {
  background-color: #e5e5e5;
  padding: 4px 8px;
  border: 1px solid black;
  margin-right: 8px;
}

input[type="file"]::file-selector-button:hover {
  background-color: #b5b5b5;
}

.file-upload-icon {
  display: none;
}

/* Error stuff */
.file-upload-error-box {
  margin-bottom: 16px;
}

.file-upload-error-text {
  margin: 0px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #aa1111;
  font-weight: 700;
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
