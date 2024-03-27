<template>
  <div :class="{ error: errorMessage != false }">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      type="text"
      v-maska
      :data-maska="dataMaska"
      :dataMaskaTokens="dataMaskaTokens"
      :value="modelValue"
      @input="validate($event.target.value)"
      :inputmode="inputmode || 'text'"
      :placeholder="placeholder"
    />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
import { vMaska } from "maska";

export default {
  directives: { maska: vMaska },
  name: "wra-text-input",
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    inputmode: {
      type: String
    },
    rules: {},
    dataMaska: {},
    dataMaskaTokens: {},
    placeholder: {
      type: String
    }
  },
  data() {
    return {
      errorMessage: "",
      firstValidation: true
    };
  },
  methods: {
    validate(value) {
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
    //Run validation rules when component first is rendered as v-model data might be valid/invalid
    this.validate(this.modelValue);
  },
  emits: ["update:modelValue", "valid"]
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

input {
  font-size: 18px;
  padding: 16px 16px;
  background-color: #fff;
  border: 1px solid #1f1f1f;
  line-height: 20px;
  display: block;
  height: 59px;
  width: 100%;
}

input:focus {
  border-color: #1f1f1f;
  outline: 1px solid #1f1f1f;
  -webkit-box-shadow: 0 0 0 3px #ffd530;
  -moz-box-shadow: 0 0 0 3px #ffd530;
  box-shadow: 0 0 0 3px #ffd530;
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
