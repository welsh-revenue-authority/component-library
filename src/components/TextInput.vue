<template>
  <div :class="{ error: errorMessage != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      v-maska="dataMaska"
      :dataMaskaTokens="dataMaskaTokens"
      :value="modelValue"
      @input="validate(($event.target as HTMLInputElement)?.value ?? '')"
      :inputmode="inputmode ?? 'text'"
      :placeholder="placeholder"
    />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { vMaska } from "maska/vue";

type ValidationRule = (value: string | number) => true | string;

export default defineComponent({
  directives: { maska: vMaska },
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
      type: String as PropType<string>,
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
     * An array of validation rule functions. Each function should return true or an error message string.
     */
    rules: {
      type: Array as PropType<ValidationRule[]>,
      default: () => []
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
  data() {
    return {
      errorMessage: "" as string,
      firstValidation: true as boolean
    };
  },
  methods: {
    /**
     * Validates the input value based on the provided rules.
     * @param {string|number} value - The input value to validate.
     */
    validate(value: string | number) {
      this.$emit("update:modelValue", value);
      this.errorMessage = "";

      if (this.rules != undefined) {
        //Checks if rules exists
        for (let index = 0; index < this.rules.length; index++) {
          const element = this.rules[index];
          let result = element(value);
          if (result != true) {
            this.errorMessage = result;
            this.$emit("valid", { id: this.id, value: false });
            break;
          }
        }
      }

      if (this.errorMessage == "") {
        this.$emit("valid", { id: this.id, value: true });
      }

      //Gives user a chance to type something in instead of making whole form red immediately
      if (this.firstValidation == true) {
        this.firstValidation = false;
        if (this.errorMessage != "") {
          //Ensures edge case bug doesn't happen where there's an error but no visual output
          this.errorMessage = "";
          return;
        }
      }
    }
  },
  mounted() {
    // Run validation rules when component first is rendered as v-model data might be valid/invalid
    this.validate(this.modelValue);
    this.$emit("update:modelValue", this.modelValue);
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
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--color-wra-black);
  line-height: 1.15;
  display: block;
  width: 100%;
}

input:focus {
  border-color: var(--color-wra-black);
  outline: 1px solid var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

label {
  color: var(--color-wra-black);
  font-size: 16px;
  display: block;
  margin-bottom: 4px;
}

div.error > p {
  margin-top: 10px;
  padding: 10px;
  background: var(--color-wra-light-red);
  color: var(--color-wra-black);
  font-size: 16px;
  border-left: 10px solid var(--color-wra-red);
}
</style>
