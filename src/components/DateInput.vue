<template>
  <div :class="{ error: showError != false }">
    <label :for="id" v-if="label">{{ label }}</label>
    <input
      :id="id"
      type="text"
      :value="maskedValue"
      :inputmode="inputmode || 'numeric'"
      :placeholder="placeholder"
      :defaultValidation="defaultValidation"
      @input="convertToDate($event.target.value)"
      v-maska
      data-maska="##/##/####"
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
    modelValue: {
      required: true
    },
    label: {
      type: String
    },
    id: {
      required: true,
      default: "dateInput",
      type: String
    },
    inputmode: {
      default: "numeric",
      type: String
    },
    required: {},
    placeholder: {
      default: "DD/MM/YYYY",
      type: String
    },
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
    modelValue(newValue) {
      //Required if parent changes the model value after rendering
      if (newValue != this.dateObjectValue) {
        this.setInitialState();
      }
    }
  },
  methods: {
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
      if (this.defaultValidation == false) {
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
    setInitialState() {
      if (this.modelValue == null || this.modelValue == "") {
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
  font-size: 18px;
  padding: 16px 16px;
  background-color: #fff;
  border: 1px solid #1f1f1f;
  line-height: 20px;
  display: block;
  width: 100%;
  height: 59px;
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
  width: 100%;
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
