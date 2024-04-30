<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="service-link"
  >
    <img :src="serviceLogo" class="service-logo" :alt="alt" />
  </a>
</template>

<script>
export default {
  name: "wra-service-logo",
  props: {
    serviceLogo: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  }
};
</script>

<style scoped>
.service-logo {
  width: 100%;
}

.service-link {
  border: #fff solid 2px;
  outline: #fff solid 2px;
  display: block;
  padding: 2px;
  line-height: 0.8;
  outline-offset: 0;
}

.service-link:focus {
  border: #ffd530 solid 2px;
  outline: #1f1f1f solid 2px;
  background: #fff;
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
