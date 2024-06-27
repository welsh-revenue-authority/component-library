<template>
  <div>
    <label :for="groupName + '-' + option.value" class="radio-label">
      <input
        type="radio"
        :name="groupName"
        :value="option.value"
        :id="groupName + '-' + option.value"
        @change="$parent.$emit('update:modelValue', option.value)"
        class="radio-input"
        :checked="isChecked == true"
        :aria-checked="isChecked"
      />
      <span class="radio-text">
        <p>{{ option.label }}</p>
        <p
          v-if="option.info"
          class="further-information-text"
          v-html="option.info"
        ></p>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "wra-radio",
  props: {
    groupName: {
      type: String,
      required: true
    },
    option: {
      type: Object,
      required: true
    },
    isChecked: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.radio-label {
  background: #e5e5e5;
  padding: 20px 20px 20px 20px;
  min-height: 24px;
  display: flex;
  cursor: pointer;

  display: grid;
  grid-template-columns: 20px auto;
}

.radio-label:hover {
  background: #b5b5b5;
}

.radio-input {
  cursor: pointer;

  appearance: none;
  background-color: #fff;
  margin: 0;

  color: #1f1f1f;
  width: 20px;
  height: 20px;
  border: 1px solid #1f1f1f;
  border-radius: 50%;
  transform: translateY(1px);

  display: grid;
  place-content: center;
}

.radio-input::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  background-color: #1f1f1f;
}

.radio-input:checked::before {
  transform: scale(1);
}

.radio-input:focus {
  outline: 2px solid #1f1f1f;
  background-color: #ffd530;
}

.radio-input:focus-visible {
  outline-offset: 0px;
}

.radio-text {
  padding: 0px 0px 0px 10px;
  font-size: 18px;
}

.further-information-text {
  font-size: 14px;
}

p {
  margin: 0px;
}
</style>
