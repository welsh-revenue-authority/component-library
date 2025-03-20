<template>
  <div role="checkbox" :aria-label="label">
    <label :for="id" class="checkbox-label">
      <input
        class="checkbox-input"
        type="checkbox"
        :id="id"
        :checked="isChecked"
        :aria-checked="ariaIsChecked"
        @change="checkInput()"
        @click="$emit('click')"
      />
      <span class="checkbox-text">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "wra-checkbox",
  props: {
    modelValue: {},
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isChecked: this.value,
      ariaIsChecked: null
    };
  },
  watch: {
    modelValue: {
      handler() {
        this.isChecked = this.modelValue;
        if (this.isChecked == true) {
          this.ariaIsChecked = "true";
        } else {
          this.ariaIsChecked = "false";
        }
      },
      immediate: true
    }
  },
  methods: {
    checkInput: function () {
      this.isChecked = !this.isChecked;
      this.$emit("update:modelValue", this.isChecked);
    }
  }
};
</script>

<style scoped>
.checkbox-label {
  background: var(--color-wra-grey);
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

  color: var(--color-wra-black);
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-wra-black);
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
  background-color: var(--color-wra-black);

  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox-input:checked::before {
  transform: scale(1);
}

.checkbox-input:focus {
  outline: 2px solid var(--color-wra-black);
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
