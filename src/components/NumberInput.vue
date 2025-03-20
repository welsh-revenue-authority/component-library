<template>
  <div :class="{ error: errorMessage != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <div class="input-wrapper">
      <span class="prefix" v-if="!!prefix">{{ prefix }}</span>
      <input
        :id="id"
        :type="type"
        :inputmode="inputmode || 'numeric'"
        :placeholder="placeholder"
        :value="modelValue"
        v-maska="'9,99#'"
        data-maska-tokens="9:[0-9]:repeated"
        data-maska-reversed
        @maska="onMaska($event.detail)"
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
  name: "wra-number-input",
  props: {
    /**
     * The value of the input field.
     * @type {string|number}
     * @required
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
     * @default "numberInput"
     */
    id: {
      type: String,
      required: true,
      default: "numberInput"
    },
    /**
     * The type of the input field.
     * @type {string}
     * @default "text"
     * @validator value {string} - The type must be one of ["text", "password", "search"].
     */
    type: {
      type: String,
      // Default of number causes issues with maska
      default: "text",
      validator(value) {
        // Types that take typical text input
        return ["text", "password", "search"].includes(value);
      }
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "numeric"
     */
    inputmode: {
      type: String,
      default: "numeric",
      validator(value) {
        return ["numeric", "decimal", "text"].includes(value);
      }
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     */
    placeholder: {
      type: String
    },
    /**
     * Validation rules for the input field.
     * @type {Array<Function>}
     */
    rules: {},
    /**
     * The prefix text to display before the input field.
     * @type {string}
     */
    prefix: {
      type: String
    },
    /**
     * The suffix text to display after the input field.
     * @type {string}
     */
    suffix: {
      type: String
    },
    /**
     * Whether to emit full maska details, including masked and unmasked values.
     * @type {boolean}
     * @default false
     */
    emitMaskaDetails: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "valid"],
  data: () => ({
    dataValue: "",
    errorMessage: "",
    firstValidation: true,
    returnValue: ""
  }),
  methods: {
    validate(value) {
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
    },
    onMaska(value) {
      const emittedValue = this.emitMaskaDetails ? value : value.unmasked;
      this.$emit("update:modelValue", emittedValue);
      this.validate(value.unmasked);
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
  created() {
    //Run validation rules when component first is rendered as v-model data might be valid/invalid
    // this.dataValue = this.modelValue ?? "";
    this.validate(this.modelValue);
    this.$emit("update:modelValue", this.modelValue);
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
  -webkit-box-shadow: 0 0 0 3px #ffd530;
  -moz-box-shadow: 0 0 0 3px #ffd530;
  box-shadow: 0 0 0 3px #ffd530;
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
  background: #ffe4e5;
  color: #aa1111;
  font-size: 16px;
  border-left: #aa1111 3px solid;
}
</style>
