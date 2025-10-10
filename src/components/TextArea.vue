<template>
  <div :class="{ error: errorMessage }">
    <label :for="String(id)" v-if="label">{{ label }}</label>
    <textarea
      rows="5"
      :id="String(id)"
      :value="modelValue"
      @input="validate(($event.target as HTMLTextAreaElement)?.value || '')"
      :maxlength="maxLength"
    />
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export type TextAreaValidationRule = (value: string) => true | string;

export default defineComponent({
  name: "wra-text-area",
  props: {
    /**
     * The unique id for the textarea input and label association.
     */
    id: {
      type: Number as PropType<number>,
      required: true
    },
    /**
     * The v-model binding for the textarea value.
     */
    modelValue: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The label text displayed above the textarea.
     */
    label: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * An array of validation rule functions. Each function should return true or an error message string.
     */
    rules: {
      type: Array as PropType<TextAreaValidationRule[]>,
      default: () => [],
      required: false
    },
    /**
     * The maximum number of characters allowed in the textarea.
     */
    maxLength: {
      type: Number as PropType<number>,
      required: false
    }
  },
  emits: ["update:modelValue", "valid"],
  data() {
    return {
      errorMessage: "" as string,
      firstValidation: true as boolean
    };
  },
  methods: {
    validate(value: string) {
      this.$emit("update:modelValue", value);
      this.errorMessage = "";

      if (this.rules != undefined) {
        //checks if rules exists
        for (let index = 0; index < this.rules.length; index++) {
          const element = this.rules[index];
          const result = element(value);
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

      //gives user a chance to type something in instead of making form red immediately
      if (this.firstValidation == true) {
        this.firstValidation = false;
        if (this.errorMessage != "") {
          //ensures edge case bug doesn't happen where there's an error but no visual output
          this.errorMessage = "";
          return;
        }
      }
    }
  },
  mounted() {
    // Run validation rules when component is first rendered, as v-model data might be valid/invalid
    this.validate(this.modelValue);
  }
});
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

textarea {
  font-family: Arial, Helvetica, "Nimbus Sans L", sans-serif;
  font-size: 16px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid var(--color-wra-black);
  line-height: 1.15;
  display: block;
  width: 100%;
}

textarea:focus {
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
  margin-top: 8px;
  margin-bottom: 0;
  padding: 12px;
  background: var(--color-wra-light-red);
  color: var(--color-wra-black);
  font-size: 16px;
  border-left: 10px solid var(--color-wra-red);
}
</style>
