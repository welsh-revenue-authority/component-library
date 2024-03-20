<template>
  <div
    role="checkbox"
    class="checkbox"
    :aria-label="checkForObjectLabel(option)"
    v-for="option in options"
  >
    <label :for="checkForObjectValue(option)" class="checkbox-label">
      <input
        class="checkbox-input"
        type="checkbox"
        :id="checkForObjectValue(option)"
        :checked="checked[checkForObjectValue(option)]"
        :aria-checked="checked[checkForObjectValue(option)]"
        @change="checkInput(checkForObjectValue(option))"
      />
      <span class="checkbox-text">{{ checkForObjectLabel(option) }}</span>
    </label>
  </div>
</template>

<script>
import WraCheckbox from "./Checkbox.vue";

export default {
  name: "wra-checkbox-group",
  props: {
    modelValue: {},
    options: {
      required: true,
      type: Array
    },
    itemValue: {
      required: true,
      type: String
    },
    itemLabel: {
      required: true,
      type: String
    },
    returnObject: {}
  },
  data() {
    return {
      checked: {}
    };
  },
  methods: {
    checkInput(value) {
      this.checked[value] = !this.checked[value];

      //create array of only 'true' values from this.checked
      let checkedArray = [];
      //loop through this.checked object
      if (this.returnObject == true) {
        Object.keys(this.checked).forEach((key) => {
          const element = this.checked[key];
          if (element == true) {
            for (let index = 0; index < this.options.length; index++) {
              const option = this.options[index];
              //check if item is an object
              if (typeof option === "object") {
                if (option[this.itemValue] == key) {
                  checkedArray.push(option);
                }
              } else {
                if (option == key) {
                  checkedArray.push(option);
                }
              }
            }
          }
        });
      } else {
        checkedArray = Object.keys(this.checked).filter(
          (key) => this.checked[key]
        );
      }

      this.$emit("update:modelValue", checkedArray);
    },
    checkForObjectLabel(input) {
      //check if item is an object
      if (typeof input === "object") {
        return input[this.itemLabel];
      } else {
        return input;
      }
    },
    checkForObjectValue(input) {
      //check if item is an object
      if (typeof input === "object") {
        return input[this.itemValue];
      } else {
        return input;
      }
    }
  },
  mounted() {
    //sets up which values should be checked initially e.g. if editing existing data
    for (let index = 0; index < this.modelValue.length; index++) {
      const element = this.modelValue[index];
      if (typeof element === "object") {
        this.checked[element[this.itemValue]] = true;
      } else {
        this.checked[element] = true;
      }
    }
  },
  components: {
    WraCheckbox
  }
};
</script>

<style scoped>
.checkbox:not(:last-child):not(:only-child) {
  margin-bottom: 8px;
}

.checkbox-label {
  background: #e5e5e5;
  padding: 20px 20px 20px 20px;
  min-height: 24px;
  display: flex;
  cursor: pointer;
  line-height: 1.375rem;

  display: grid;
  grid-template-columns: 20px auto;
}

.checkbox-label:hover {
  background: #b5b5b5;
}

.checkbox-input {
  cursor: pointer;

  appearance: none;
  background-color: #fff;
  margin: 0;

  color: #1f1f1f;
  width: 20px;
  height: 20px;
  border: 1px solid #1f1f1f;
  border-radius: 0px;
  transform: translateY(1px);

  display: grid;
  place-content: center;
}

.checkbox-input::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 0px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #1f1f1f;

  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox-input:checked::before {
  transform: scale(1);
}

.checkbox-input:focus {
  outline: 2px solid #1f1f1f;
  background-color: #ffd530;
}

.checkbox-input:focus-visible {
  outline-offset: 0px;
}

.checkbox-text {
  padding: 0px 0px 0px 10px;
  font-size: 18px;
}
</style>
