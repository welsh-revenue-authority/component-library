<template>
  <div :class="{ error: errorMessage != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <div class="input-wrapper">
      <span class="prefix" v-if="!!prefix">{{ prefix }}</span>
      <input
        :id="id"
        type="text"
        :value="maskedValue"
        :inputmode="inputmode || 'decimal'"
        :placeholder="placeholder"
        v-maska="mask"
        @maska="onMaska"
        data-maska="0.99"
        data-maska-tokens="0:\d:multiple|9:\d:optional"
        :class="prefixPadding"
      />
      <span class="suffix" v-if="!!suffix">{{ suffix }}</span>
    </div>
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
import { vMaska } from "maska/vue";

export default {
  directives: { maska: vMaska },
  name: "wra-price-input",
  props: {
    /**
     * The value of the input field.
     * @type {string|number}
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
     * @default "priceInput"
     */
    id: {
      type: String,
      required: true,
      default: "priceInput"
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "decimal"
     * @validator value {string} - The input mode must be one of ["numeric", "decimal", "text"].
     */
    inputmode: {
      default: "decimal",
      type: String,
      validator(value) {
        return ["numeric", "decimal", "text"].includes(value);
      }
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     * @default "0.00"
     */
    placeholder: {
      default: "0.00",
      type: String
    },
    /**
     * An array of validation rule functions. Each function should return true or an error message string.
     */
    rules: {
      type: Array,
      default: () => []
    },
    /**
     * The prefix text to display before the input field.
     * @type {string}
     * @default "£"
     */
    prefix: {
      default: "£",
      type: String
    },
    /**
     * The suffix text to display after the input field.
     * @type {string}
     */
    suffix: {
      type: String
    }
  },
  emits: ["update:modelValue", "valid"],
  data: () => ({
    maskedValue: "",
    mask: {
      preProcess: (val) => val.replace(/[£,]/g, ""),
      postProcess: (val) => {
        if (!val) return "";

        const sub = 3 - (val.includes(".") ? val.length - val.indexOf(".") : 0);

        return Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP"
        })
          .format(val)
          .slice(0, sub ? -sub : undefined)
          .replace("£", "");
      }
    },
    errorMessage: "",
    firstValidation: true
  }),
  watch: {
    modelValue(newValue) {
      // Add thousand separators with , to the value which is a decimal number
      // Helps avoid rendered fields from flickering as the commas are deleted/added
      this.maskedValue = newValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  methods: {
    onMaska(event) {
      // Remove all non-numeric characters except the decimal point
      const unmaskedValue = event.detail.masked.replace(/[^0-9.]/g, "");
      this.$emit("update:modelValue", unmaskedValue);
      this.validate(unmaskedValue);
    },
    validate(value) {
      this.errorMessage = "";
      if (this.rules != undefined) {
        // Checks if rules exist
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

      // Gives user a chance to type something in instead of making whole form red immediately
      if (this.firstValidation == true) {
        this.firstValidation = false;
        if (this.errorMessage != "") {
          // Ensures edge case bug doesn't happen where there's an error but no visual output
          this.errorMessage = "";
          return;
        }
      }
    }
  },
  computed: {
    prefixPadding() {
      if (this.prefix != undefined) {
        return "padding-for-prefix";
      } else {
        return "padding-for-no-prefix";
      }
    }
  },
  mounted() {
    // Run validation rules when component first is rendered as v-model data might be valid/invalid
    this.maskedValue = this.modelValue;
    this.$emit("update:modelValue", this.maskedValue);
    this.validate(this.modelValue);
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid black;
  width: 100%;
}

.prefix {
  padding: 10px 0px 10px 10px;
  font-size: 16px;
}

.suffix {
  padding: 10px 10px 10px 0px;
  font-size: 16px;
  z-index: 1;
}

.input-wrapper input {
  font-size: 16px;
  background-color: transparent;
  line-height: 1.15;
  width: 100%;
  outline: none;
}

.padding-for-prefix {
  padding: 10px 6px 10px 6px;
}

.padding-for-no-prefix {
  padding: 10px;
}

.input-wrapper:focus-within {
  border-color: var(--color-wra-black);
  outline: 1px solid var(--color-wra-black);
  -webkit-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  -moz-box-shadow: 0 0 0 3px var(--color-wra-yellow);
  box-shadow: 0 0 0 3px var(--color-wra-yellow);
}

input {
  border: none;
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
