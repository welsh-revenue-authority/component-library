<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="service-link"
  >
    <img :src="serviceLogo" :height="height" class="service-logo" :alt="alt" />
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
    },
    height: {
      type: [String, Number]
    }
  }
};
</script>

<style scoped>
.service-logo {
  max-width: 100%;
}

.service-link {
  border: transparent solid 2px;
  outline: transparent solid 2px;
  display: block;
  padding: 2px;
  line-height: 0.8;
  outline-offset: 0;
}

.service-link:focus {
  border: 2px solid var(--color-wra-yellow);
  outline: 2px solid var(--color-wra-black);
  background: transparent;
  box-shadow: none;
  -webkit-box-shadow: none;
}
</style>
