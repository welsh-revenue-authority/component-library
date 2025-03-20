<template>
  <div class="validation-tooltip" :class="type">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wra-validation-tooltip",
  props: {
    type: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.validation-tooltip {
  color: var(--color-wra-black);
  border-radius: 0px;
  font-size: 18px;
  padding: 25px;
}

.wra-error {
  background-color: var(--color-wra-light-red);
  border-left: 10px solid var(--color-wra-red);
}

.wra-success {
  background-color: var(--color-wra-light-green);
  border-left: 10px solid var(--color-wra-green);
}

.wra-info {
  background-color: var(--color-wra-light-blue);
  border-left: 10px solid var(--color-wra-blue);
}

.wra-warning {
  background-color: var(--color-wra-light-yellow);
  border-left: 10px solid var(--color-wra-yellow);
}
</style>
