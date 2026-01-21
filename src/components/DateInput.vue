<template>
  <div :class="{ error: showError != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :value="maskedValue"
      :inputmode="inputmode ? inputmode : 'numeric'"
      :placeholder="placeholder"
      :defaultValidation="defaultValidation"
      @input="onInputHandler"
      v-maska="'##/##/####'"
      data-maska-eager
    />
    <p v-if="showError && required != undefined">Invalid date</p>
  </div>
</template>

<script lang="ts">
import { vMaska } from "maska/vue";
import { defineComponent, Directive, PropType } from "vue";

const vMaskaDirective = vMaska as unknown as Directive;

export default defineComponent({
  directives: { maska: vMaskaDirective },
  name: "wra-date-input",
  props: {
    /**
     * The value of the input field.
     * @required
     * @default ""
     */
    modelValue: {
      type: [String, Object] as PropType<string | Date>,
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
     * @default "dateInput"
     */
    id: {
      type: String as PropType<string>,
      required: true,
      default: "dateInput"
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "numeric"
     * @validator value {string}
     */
    inputmode: {
      type: String as PropType<
        | "numeric"
        | "search"
        | "text"
        | "email"
        | "tel"
        | "url"
        | "none"
        | "decimal"
      >,
      default: "numeric",
      validator(value: string) {
        return [
          "numeric",
          "search",
          "text",
          "email",
          "tel",
          "url",
          "none",
          "decimal"
        ].includes(value);
      }
    },
    /**
     * Whether the input field is required.
     * @type {boolean}
     * @default false
     */
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     * @default "DD/MM/YYYY"
     *
     */
    placeholder: {
      type: String as PropType<string>,
      default: "DD/MM/YYYY"
    },
    /**
     * Whether to use default validation for the input field.
     * @type {boolean}
     * @default false
     */
    defaultValidation: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ["update:modelValue", "valid"],
  data() {
    return {
      maskedValue: "" as string,
      showError: false as boolean,
      firstValidation: true as boolean,
      dateObjectValue: null as Date | null
    };
  },
  watch: {
    /**
     * Watcher for modelValue prop.
     * @param {string|Date} newValue - The new value of the modelValue prop.
     */
    modelValue(newValue: string | Date) {
      //Required if parent changes the model value after rendering
      if (newValue != this.dateObjectValue) {
        this.setInitialState();
      }
    }
  },
  methods: {
    /**
     * Handles input event safely for TypeScript.
     */
    onInputHandler(event: Event): void {
      const target = event.target as HTMLInputElement | null;
      this.convertToDate(target ? target.value : "");
    },
    /**
     * Swaps the day and month in a date string.
     * @param {string} input - The input date string in DD/MM/YYYY format.
     * @returns {string} - The date string with day and month swapped.
     */
    swapMonthDay(input: string): string {
      const value = input.split("/");
      const d = value[1] + "/" + value[0] + "/" + value[2];
      return d;
    },
    convertToDate(value: string): void {
      this.maskedValue = value;
      if (value.length == 10) {
        let newDate = new Date(this.swapMonthDay(value));

        //Remove timezone from newDate
        newDate = new Date(
          newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000
        );

        const result = this.validate(newDate);
        this.$emit("valid", { id: this.id, value: result });

        if (result == true) {
          this.dateObjectValue = newDate;
          this.$emit("update:modelValue", newDate);
        } else {
          this.dateObjectValue = null;
          this.$emit("update:modelValue", null);
        }
      } else {
        const result = this.validate(null);
        this.$emit("valid", { id: this.id, value: result });
        this.dateObjectValue = null;
        this.$emit("update:modelValue", null);
      }
    },
    validate(dateInput: Date | null | string): boolean {
      // Bypass built in validation if defaultValidation = false
      if (this.defaultValidation === false) {
        return true;
      }

      let result = true;

      if (dateInput === null) {
        if (this.required == true) {
          this.showError = true;
          result = false;
        }

        if (this.required == false) {
          if (this.maskedValue.length == 0) {
            this.showError = false;
            result = true;
          } else {
            this.showError = true;
            result = false;
          }
        }

        if (this.firstValidation == true) {
          this.firstValidation = false;
          this.showError = false;
        }
        return result;
      }

      if (dateInput == "Invalid Date") {
        result = false;
      }

      const inputMonth = parseInt(this.maskedValue.split("/")[1]) - 1;
      //Required as JavaScript will accept an invalid date e.g. 31/06/2020
      //It will just return it as 01/07/2020 & back-end will throw errors
      if (typeof dateInput === "object" && inputMonth != dateInput.getMonth()) {
        result = false;
      }

      this.showError = !result;

      if (this.firstValidation == true) {
        this.firstValidation = false;
        this.showError = false;
      }

      return result;
    },
    /**
     * Sets the initial state of the component based on the modelValue prop.
     */
    setInitialState(): void {
      if (
        typeof this.modelValue === "undefined" ||
        this.modelValue == null ||
        this.modelValue == ""
      ) {
        this.convertToDate("");
        return;
      }
      if (typeof this.modelValue === "object") {
        //If parent has passed a Date object
        //Convert Date object into DD/MM/YYYY
        const formatted =
          (this.modelValue as Date).getDate().toString().padStart(2, "0") +
          "/" +
          ((this.modelValue as Date).getMonth() + 1)
            .toString()
            .padStart(2, "0") +
          "/" +
          (this.modelValue as Date).getFullYear();
        this.convertToDate(formatted);
      } else if (
        typeof this.modelValue === "string" &&
        this.modelValue.includes("T")
      ) {
        //If input has JavaScript date string e.g. 2022-02-28T00:00:00 into 28/02/2022
        const dt = new Date(this.modelValue);
        const formatted =
          dt.getDate().toString().padStart(2, "0") +
          "/" +
          (dt.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          dt.getFullYear();

        this.convertToDate(formatted);
      } else if (typeof this.modelValue === "string") {
        //If input is just in format 21/12/2020
        this.convertToDate(this.modelValue);
      }
    }
  },
  mounted() {
    this.setInitialState();
  }
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
  width: 100%;
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
