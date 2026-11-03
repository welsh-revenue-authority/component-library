<template>
  <label :for="id" v-if="label">{{ label }}</label>
  <input
    :id="id"
    :type="type"
    v-maska="dataMaska"
    :dataMaskaTokens="dataMaskaTokens"
    :value="modelValue"
    :inputmode="inputmode"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { defineComponent, Directive, HTMLAttributes, PropType } from "vue";
import { vMaska } from "maska/vue";

// Getting around vmaska incorrect typing
const vMaskaDirective = vMaska as unknown as Directive;

export default defineComponent({
  directives: { maska: vMaskaDirective },
  name: "wra-text-input",
  props: {
    /**
     * The value of the input field.
     * @type {string|number}
     * @required
     * @default ""
     */
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: true,
      default: ""
    },
    /**
     * The label for the input field.
     * @type {string}
     */
    label: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * The ID for the input field.
     * @type {string}
     * @required
     * @default "customInput"
     */
    id: {
      type: String as PropType<string>,
      required: true,
      default: "textInput"
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "numeric"
     * @validator value {string} - The input mode must be one of ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"].
     */
    inputmode: {
      type: String as PropType<HTMLAttributes["inputmode"]>,
      default: "text",
      validator(value: string) {
        return [
          "none",
          "text",
          "tel",
          "url",
          "email",
          "numeric",
          "decimal",
          "search"
        ].includes(value);
      }
    },
    /**
     * The type of the input field.
     * @type {string}
     * @default "text"
     * @validator value {string} - The type must be one of ["text", "none", "tel", "url", "email", "numeric", "decimal"].
     */
    type: {
      type: String as PropType<string>,
      default: "text",
      validator(value: string) {
        return ["text", "tel", "url", "email", "numeric", "decimal"].includes(
          value
        );
      }
    },
    /**
     * The mask pattern for the input field.
     * @type {string}
     */
    dataMaska: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * Custom tokens for the mask.
     * @type {string}
     */
    dataMaskaTokens: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     */
    placeholder: {
      type: String as PropType<string>,
      required: false
    }
  },
  emits: ["update:modelValue", "valid"]
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

input {
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  background-color: #fff;
  border: 2px solid var(--color-wra-black);
  line-height: 20px;
  display: block;
  width: 100%;
}

input:focus {
  border-color: var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

input:focus-visible {
  outline: none;
}

label {
  color: var(--color-wra-black);
  font-size: 16px;
  display: block;
  margin-bottom: 4px;
}
</style>
