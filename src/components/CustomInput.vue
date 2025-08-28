<template>
  <div :class="{ error: !!errorMessage }">
    <label :for="id" v-if="label">{{ label }}</label>
    <div class="input-wrapper">
      <span class="prefix" v-if="!!prefix">{{ prefix }}</span>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :inputmode="inputmode"
        :placeholder="placeholder"
        v-maska="dataMaska"
        @maska="onMaska"
        :data-maska-eager="dataMaskaEager"
        :data-maska-reversed="dataMaskaReversed"
        :data-maska-tokens="dataMaskaTokens"
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

export default defineComponent({
  directives: { maska: vMaska },
  name: "wra-custom-input",
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
     * The mask pattern for the input field.
     * @type {string}
     */
    dataMaska: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * Whether to apply the mask eagerly.
     * @type {boolean}
     * @default false
     */
    dataMaskaEager: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    /**
     * Whether to apply the mask in reverse.
     * @type {boolean}
     * @default false
     */
    dataMaskaReversed: {
      type: Boolean as PropType<boolean>,
      default: false
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
      default: "customInput"
    },
    /**
     * The input mode for the input field.
     * @type {string}
     * @default "numeric"
     * @validator value {string} - The input mode must be one of ["none", "text", "tel", "url", "email", "numeric", "decimal", "search"].
     */
    inputmode: {
      type: String as PropType<
        | "none"
        | "text"
        | "tel"
        | "url"
        | "email"
        | "numeric"
        | "decimal"
        | "search"
      >,
      default: "numeric"
    },
    /**
     * The type of the input field.
     * @type {string}
     * @default "text"
     * @validator value {string} - The type must be one of ["text", "none", "tel", "url", "email", "numeric", "decimal"].
     */
    type: {
      type: String as PropType<
        "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"
      >,
      default: "text"
    },
    /**
     * The placeholder text for the input field.
     * @type {string}
     */
    placeholder: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * An array of validation rule functions. Each function should return true or an error message string.
     */
    rules: {
      type: Array as PropType<Array<(value: string | number) => true | string>>,
      default: () => []
    },
    /**
     * The prefix text to display before the input field.
     * @type {string}
     */
    prefix: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * The suffix text to display after the input field.
     * @type {string}
     */
    suffix: {
      type: String as PropType<string>,
      required: false
    },
    /**
     * Whether to emit maska details.
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
      errorMessage: "" as string,
      firstValidation: true as boolean
    };
  },
  methods: {
    onMaska(event: any) {
      const unmaskedValue = event.detail.unmasked;
      this.$emit("update:modelValue", unmaskedValue);
      this.validate(unmaskedValue);
    },
    validate(value: string | number) {
      this.errorMessage = "";

      if (this.rules != undefined) {
        // Checks if rules exists
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
    prefixPadding(): string {
      if (this.prefix != undefined) {
        return "padding-for-prefix";
      } else {
        return "padding-for-no-prefix";
      }
    }
  },
  mounted() {
    // Run validation rules when component first is rendered as v-model data might be valid/invalid
    this.$emit("update:modelValue", this.modelValue);
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
