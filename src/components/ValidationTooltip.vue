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
  color: #1f1f1f;
  border-radius: 0px;
  font-size: 18px;
  padding: 20px 16px 20px 24px;
}

.wra-error {
  background-color: #ffe4e5;
  border-left: 10px solid #aa1111;
}

.wra-success {
  background-color: #cdf7d4;
  border-left: 10px solid #019e1e;
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
