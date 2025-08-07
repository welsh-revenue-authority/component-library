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

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-service-logo",
  props: {
    /**
     * The URL or path to the logo image to display.
     */
    serviceLogo: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The accessible label for the link.
     */
    label: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The alt text for the logo image.
     */
    alt: {
      type: String as PropType<string>,
      required: true
    },
    /**
     * The URL to navigate to when the logo is clicked.
     */
    href: {
      type: String as PropType<string>
    },
    /**
     * The height of the logo image in pixels.
     */
    height: {
      type: [String, Number] as PropType<string | number>
    }
  }
});
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
