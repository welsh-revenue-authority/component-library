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
        v-maska:[mask]="returnValue"
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
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  name: "wra-price-input",
  props: {
    modelValue: {
      type: Number
    },
    label: {
      type: String
    },
    id: {
      type: String,
      required: true,
      default: "priceInput"
    },
    inputmode: {
      default: "decimal",
      type: String
    },
    placeholder: {
      default: "0.00",
      type: String
    },
    rules: {},
    prefix: {
      default: "£",
      type: String
    },
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
    returnValue: {
      masked: "",
      unmasked: "",
      completed: false
    },
    firstValidation: true
  }),
  watch: {
    modelValue(newValue) {
      //Add thousand seperators with , to the value which is a decimal number
      //Helps avoid rendered fields from flickering as the commas are deleted/added
      this.maskedValue = newValue
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    "returnValue.masked"() {
      this.$emit("update:modelValue", this.returnValue.masked);
      this.validate(this.returnValue.masked);
    }
  },
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
    //Run validation rules when component first is rendered as v-model data might be valid/invalid
    this.maskedValue = this.modelValue;
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
  padding: 16px 0px 16px 16px;
  font-size: 18px;
  width: 28px;
}

.suffix {
  padding: 16px 16px 16px 0px;
  font-size: 18px;
  z-index: 1;
}

.input-wrapper input {
  font-size: 18px;
  background-color: transparent;
  line-height: 20px;
  width: 100%;
  height: 59px;
  outline: none;
}

.padding-for-prefix {
  padding: 16px 6px 16px 6px;
}

.padding-for-no-prefix {
  padding: 16px 16px 16px 16px;
}

.input-wrapper:focus-within {
  border-color: #1f1f1f;
  outline: 1px solid #1f1f1f;
  -webkit-box-shadow: 0 0 0 3px #ffd530;
  -moz-box-shadow: 0 0 0 3px #ffd530;
  box-shadow: 0 0 0 3px #ffd530;
}

input {
  border: none;
}

label {
  color: #1f1f1f;
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
