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
  background-color: var(--color-wra-light-grey);
  padding: 20px 24px;
}
</style>
