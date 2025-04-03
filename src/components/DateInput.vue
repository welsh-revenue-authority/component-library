<template>
  <div :class="{ error: showError != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :value="maskedValue"
      :inputmode="inputmode ?? 'numeric'"
      :placeholder="placeholder"
      :defaultValidation="defaultValidation"
      @input="convertToDate($event.target.value)"
      v-maska="'##/##/####'"
      data-maska-eager
    />
    <p v-if="showError && required != undefined">Invalid date</p>
  </div>
</template>

<script>
import { vMaska } from "maska/vue";

export default {
  directives: { maska: vMaska },
  name: "wra-date-input",
  props: {
    /**
     * The value of the input field.
     * @required
     * @default ""
     */
    modelValue: {
      required: true,
      default: ""
    },
    /**
     * The label for the input field.
     * @type {string}
     */
    label: {
      type: String
    },
    /**
     * The ID for the input field.
     * @type {string}
     * @required
     * @default "dateInput"
     */
    id: {
      required: true,
      default: "dateInput",
      type: String
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "numeric"
     * @validator value {string} - The input mode must be "numeric".
     */
    inputmode: {
      default: "numeric",
      type: String,
      validator(value) {
        return ["numeric"].includes(value);
      }
    },
    required: {},
    /**
     * The placeholder text for the input field.
     * @type {string}
     * @default "DD/MM/YYYY"
     *
     */
    placeholder: {
      default: "DD/MM/YYYY",
      type: String
    },
    /**
     * Whether to use default validation for the input field.
     * @type {boolean}
     * @default false
     */
    defaultValidation: {
      default: false
    }
  },
  emits: ["update:modelValue", "valid"],
  data: () => ({
    maskedValue: "",
    showError: false,
    firstValidation: true,
    dateObjectValue: null
  }),
  watch: {
    /**
     * Watcher for modelValue prop.
     * @param {string} newValue - The new value of the modelValue prop.
     */
    modelValue(newValue) {
      //Required if parent changes the model value after rendering
      if (newValue != this.dateObjectValue) {
        this.setInitialState();
      }
    }
  },
  methods: {
    /**
     * Swaps the day and month in a date string.
     * @param {string} input - The input date string in DD/MM/YYYY format.
     * @returns {string} - The date string with day and month swapped.
     */
    swapMonthDay(input) {
      var value = input.split("/");
      let d = value[1] + "/" + value[0] + "/" + value[2];
      return d;
    },
    convertToDate(value) {
      this.maskedValue = value;
      if (value.length == 10) {
        let newDate = new Date(this.swapMonthDay(value));

        //Remove timezone from newDate
        newDate = new Date(
          newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000
        );

        let result = this.validate(newDate);
        this.$emit("valid", { id: this.id, value: result });

        if (result == true) {
          this.dateObjectValue = newDate;
          this.$emit("update:modelValue", newDate);
        } else {
          this.dateObjectValue = null;
          this.$emit("update:modelValue", null);
        }
      } else {
        let result = this.validate(null);
        this.$emit("valid", { id: this.id, value: result });
        this.dateObjectValue = null;
        this.$emit("update:modelValue", null);
      }
    },
    validate(dateInput) {
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

      let inputMonth = parseInt(this.maskedValue.split("/")[1]) - 1;
      //Required as JavaScript will accept an invalid date e.g. 31/06/2020
      //It will just return it as 01/07/2020 & back-end will throw errors
      if (inputMonth != dateInput.getMonth()) {
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
    setInitialState() {
      if (
        typeof this.modelValue == undefined ||
        this.modelValue == null ||
        this.modelValue == ""
      ) {
        this.convertToDate("");
        return;
      }
      if (typeof this.modelValue === "object") {
        //If parent has passed a Date object
        //Convert Date object into DD/MM/YYYY
        let formatted =
          this.modelValue.getDate().toString().padStart(2, "0") +
          "/" +
          (this.modelValue.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          this.modelValue.getFullYear();
        this.convertToDate(formatted);
      } else if (this.modelValue.includes("T")) {
        //If input has JavaScript date string e.g. 2022-02-28T00:00:00 into 28/02/2022
        let dt = new Date(this.modelValue);
        let formatted =
          dt.getDate().toString().padStart(2, "0") +
          "/" +
          (dt.getMonth() + 1).toString().padStart(2, "0") +
          "/" +
          dt.getFullYear();

        this.convertToDate(formatted);
      } else {
        //If input is just in format 21/12/2020
        this.convertToDate(this.modelValue);
      }
    }
  },
  mounted() {
    this.setInitialState();
  }
};
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
  margin-top: 10px;
  padding: 10px;
  background: var(--color-wra-light-red);
  color: var(--color-wra-black);
  font-size: 16px;
  border-left: 10px solid var(--color-wra-red);
}
</style>
