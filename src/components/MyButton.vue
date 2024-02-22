<template>
  <button class="my-button">
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: "MyButton"
};
</script>

<style scoped>
.my-button {
  background-color: #001c30;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

button:is(:hover, :focus, :active) {
  background-color: #176b87;
}
</style>
