<template>
  <Transition name="error">
    <ValidationTooltip
      v-if="isError"
      class="file-upload-error-box"
      type="wra-error"
    >
      <p class="file-upload-error-text" v-if="error">
        {{ errorMessage }}
      </p>
      <p class="file-upload-error-text" v-if="fileSizeError">
        {{
          fileSizeErrorMessage.replace(
            "{maxsize}",
            String(humanReadableMaxSize)
          )
        }}
      </p>
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
      :capture="capture as any"
      :multiple="multiple"
      @change="handleFileChange"
    />
    <span class="file-name">{{ fileName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ValidationTooltip from "./ValidationTooltip.vue";
import Button from "./Button.vue";

export default defineComponent({
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
      type: String as PropType<string>,
      default: "file-upload"
    },
    /**
     * The accepted file types for the file input.
     * @type {string}
     */
    accept: {
      type: String as PropType<string>
    },
    /**
     * The capture attribute for the file input, specifying the type of media to capture.
     * @type {string}
     * @validator value {string} - The capture value must be one of ["user", "environment"].
     */
    capture: {
      type: String as PropType<string>,
      validator(value: string) {
        return ["user", "environment"].includes(value);
      }
    },
    /**
     * Whether multiple files can be selected.
     * @type {boolean}
     * @default false
     */
    multiple: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * The maximum file size allowed in bytes. If not specified, no size limit is enforced.
     * @type {number}
     */
    maxSize: {
      type: Number as PropType<number>
    },
    /**
     * The label for the file input.
     * @type {string}
     * @default "Upload File"
     */
    label: {
      type: String as PropType<string>,
      default: "File upload label"
    },
    /**
     * The background colour of the button.
     * @type {string}
     * @default "wra-revenue"
     */
    backgroundColor: {
      type: String as PropType<string>,
      default: "wra-revenue"
    },
    /**
     * The text for the button.
     * @type {string}
     * @default "Upload file"
     */
    buttonText: {
      type: String as PropType<string>,
      default: "Upload file"
    },
    /**
     * Whether there is an error with the file input.
     * @type {boolean}
     * @default false
     */
    error: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * The error message to display.
     * @type {string}
     * @default "An error has occurred"
     */
    errorMessage: {
      type: String as PropType<string>,
      default: "An error has occurred"
    },
    /**
     * The error message to display when the file size is too large.
     * @type {string}
     * @default "File size must be less than"
     */
    fileSizeErrorMessage: {
      type: String as PropType<string>,
      default: "File size must be less than {maxsize}"
    }
  },
  data() {
    return {
      fileName: "No file chosen" as string,
      fileSizeError: false as boolean,
      fileSize: 0 as number
    };
  },
  methods: {
    handleFileChange(event: Event) {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files && files.length > 0) {
        // FileList does not behave like a normal array so must convert
        const fileArray = Array.from(files);
        if (typeof this.maxSize !== "undefined" && this.maxSize !== null) {
          this.fileSize = fileArray.reduce((acc, file) => acc + file.size, 0);
          this.fileSizeError = this.fileSize > this.maxSize;
          return;
        }
        this.fileName = fileArray.map((x) => x.name).join(", ");
      } else {
        this.fileName = "No file chosen";
      }
      this.$emit("change", files);
    },
    triggerFileInput() {
      (this.$refs.fileInput as HTMLInputElement).click();
    }
  },
  computed: {
    isError(): boolean {
      return this.error || this.fileSizeError;
    },
    humanReadableMaxSize(): string {
      if (typeof this.maxSize == "undefined" || this.maxSize === null) {
        return "0";
      }

      if (this.maxSize < 1024) {
        return `${this.maxSize} bytes`;
      } else if (this.maxSize < 1024 * 1024) {
        return `${(this.maxSize / 1024).toFixed(2)} kilobytes`;
      } else {
        return `${(this.maxSize / (1024 * 1024)).toFixed(2)} megabytes`;
      }
    }
  }
});
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

.file-upload-error-text {
  margin-block: 0px;
  font-size: 18px;
}

.file-upload-error-box > .file-upload-error-text {
  margin-bottom: 1rem;
}

.file-upload-error-box > .file-upload-error-text:last-child {
  margin-bottom: 0rem;
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
