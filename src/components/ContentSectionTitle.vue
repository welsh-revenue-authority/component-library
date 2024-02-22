<template>
  <div class="content-section-title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "wra-content-section-title"
};
</script>

<style scoped>
.content-section-title {
  border-bottom: 2px solid #e5e5e5;
  border-top: 10px solid #e5e5e5;
  padding-bottom: 20px;
  padding-top: 30px;
}
</style>
