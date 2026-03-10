<template>
  <div>
    <h1 v-if="size == 'h1'">
      <slot></slot>
    </h1>
    <h2 v-if="size == 'h2'">
      <slot></slot>
    </h2>
    <h3 v-if="size == 'h3'">
      <slot></slot>
    </h3>
    <h4 v-if="size == 'h4'">
      <slot></slot>
    </h4>
    <h5 v-if="size == 'h5'">
      <slot></slot>
    </h5>
    <h6 v-if="size == 'h6'">
      <slot></slot>
    </h6>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "wra-header",
  props: {
    /**
     * The heading level to render (h1 - h6).
     */
    size: {
      type: String as PropType<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">,
      required: true
    }
  }
});
</script>
<style scoped>
div {
  font-weight: bold;
}
h1 {
  margin: 0px;
  font-size: 48px;
  letter-spacing: -0.05rem;
  line-height: 52px;
}
h2 {
  margin: 0px;
  font-size: 36px;
  letter-spacing: -0.04rem;
  line-height: 40px;
}
h3 {
  margin: 0px;
  font-size: 28px;
  letter-spacing: -0.03rem;
  line-height: 32px;
}
h4 {
  margin: 0px;
  font-size: 24px;
  letter-spacing: -0.03rem;
  line-height: 28px;
}
h5 {
  margin: 0px;
  font-size: 22px;
  letter-spacing: -0.02rem;
  line-height: 26px;
}
h6 {
  margin: 0px;
  font-size: 18px;
  letter-spacing: -0.01rem;
  line-height: 24px;
}

@media (max-width: 600px) {
  h1 {
    margin: 0px;
    font-size: 34px;
    letter-spacing: -0.05rem;
    line-height: 38px;
  }
  h2 {
    margin: 0px;
    font-size: 28px;
    letter-spacing: -0.04rem;
    line-height: 32px;
  }
  h3 {
    margin: 0px;
    font-size: 24px;
    letter-spacing: -0.03rem;
    line-height: 28px;
  }
  h4 {
    margin: 0px;
    font-size: 20px;
    letter-spacing: -0.03rem;
    line-height: 24px;
  }
  h5 {
    margin: 0px;
    font-size: 18px;
    letter-spacing: -0.02rem;
    line-height: 22px;
  }
  h6 {
    margin: 0px;
    font-size: 14px;
    letter-spacing: -0.01rem;
    line-height: 18px;
  }
}
</style>
