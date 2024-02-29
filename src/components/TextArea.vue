<template>
  <div :class="{ error: errorMessage != false }">
    <label :for="id">{{ label }}</label>
    <textarea
      :disabled="disabled || false"
      rows="5"
      :id="id"
      :value="modelValue"
      @input="validate($event.target.value)"
    />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "wra-text-area",
  props: {
    disabled: {},
    id: {
      required: true
    },
    modelValue: {
      required: true
    },
    label: {},
    rules: {}
  },
  emits: ["update:modelValue", "valid"],
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
        //checks if rules exists
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
    //run validation rules when component is first rendered, as v-model data might be valid/invalid
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

textarea {
  font-family: Arial, Helvetica, "Nimbus Sans L", sans-serif;
  font-size: 16px;
  padding: 10px 16px;
  background-color: #fff;
  border: 1px solid #1f1f1f;
  line-height: 20px;
  display: block;
  width: 100%;
}

textarea:focus {
  border-color: #1f1f1f;
  outline: 1px solid #1f1f1f;
  -webkit-box-shadow: 0 0 0 3px #ffd530;
  -moz-box-shadow: 0 0 0 3px #ffd530;
  box-shadow: 0 0 0 3px #ffd530;
}

label {
  font-family: Arial, Helvetica, "Nimbus Sans L", sans-serif;
  color: #1f1f1f;
  font-size: 16px;
  display: block;
  margin-bottom: 4px;
}

div.error > p {
  margin-top: 10px;
  padding: 10px;
  background: #ffe4e5;
  color: #1f1f1f;
  font-size: 16px;
  border-left: #aa1111 3px solid;
}
</style>
