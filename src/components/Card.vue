<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wra-card"
};
</script>

<style scoped>
.card {
  background-color: #f1f1f1;
  padding: 20px 24px;
}
</style>
