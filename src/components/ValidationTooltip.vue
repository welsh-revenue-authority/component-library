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
  background-color: #ffe4e5;
  border-left: 10px solid #aa1111;
}

.wra-success {
  background-color: #cdf7d4;
  border-left: 10px solid #018a1e;
}

.wra-info {
  background-color: #c2e0fc;
  border-left: 10px solid #0360a6;
}

.wra-warning {
  background-color: #fff5ce;
  border-left: 10px solid #ffd530;
}
</style>
