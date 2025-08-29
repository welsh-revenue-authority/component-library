<template>
  <div :class="{ error: !!errorMessage }">
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

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { vMaska } from "maska/vue";

type RuleFunction = (value: string | number) => true | string;

export default defineComponent({
  directives: { maska: vMaska },
  name: "wra-number-input",
  props: {
    /**
     * The value of the input field.
     * @type {string|number}
     * @required
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
      type: String as PropType<string>
    },
    /**
     * The ID for the input field.
     * @type {string}
     * @required
     * @default "numberInput"
     */
    id: {
      type: String as PropType<string>,
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
      type: String as PropType<"text" | "password" | "search">,
      // Default of number causes issues with maska
      default: "text",
      validator(value: string) {
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
      type: String as PropType<"numeric" | "decimal" | "text">,
      default: "numeric",
      validator(value: string) {
        return ["numeric", "decimal", "text"].includes(value);
      }
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     */
    placeholder: {
      type: String as PropType<string>
    },
    /**
     * An array of validation rule functions. Each function should return true or an error message string.
     */
    rules: {
      type: Array as PropType<RuleFunction[]>,
      default: () => []
    },
    /**
     * The prefix text to display before the input field.
     * @type {string}
     */
    prefix: {
      type: String as PropType<string>
    },
    /**
     * The suffix text to display after the input field.
     * @type {string}
     */
    suffix: {
      type: String as PropType<string>
    },
    /**
     * Whether to emit full maska details, including masked and unmasked values.
     * @type {boolean}
     * @default false
     */
    emitMaskaDetails: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ["update:modelValue", "valid"],
  data() {
    return {
      dataValue: "" as string,
      errorMessage: "" as string,
      firstValidation: true as boolean,
      returnValue: "" as string
    };
  },
  methods: {
    validate(value: string | number) {
      this.errorMessage = "";
      if (this.rules != undefined) {
        //Checks if rules exists
        for (let index = 0; index < this.rules.length; index++) {
          const element = this.rules[index];
          const result = element(value);
          if (result != true) {
            this.errorMessage = result as string;
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
    onMaska(value: any) {
      const emittedValue = this.emitMaskaDetails ? value : value.unmasked;
      this.$emit("update:modelValue", emittedValue);
      this.validate(value.unmasked);
    }
  },
  computed: {
    prefixPadding(): string {
      if (this.prefix != undefined) {
        return "padding-for-prefix";
      } else {
        return "padding-for-no-prefix";
      }
    }
  },
  created() {
    // Run validation rules when component first is rendered as v-model data might be valid/invalid
    // this.dataValue = this.modelValue ?? "";
    this.validate(this.modelValue);
    this.$emit("update:modelValue", this.modelValue);
  }
});
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
