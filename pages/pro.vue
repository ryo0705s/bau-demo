<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ text }}</div>
    <button @click="deletee"></button>
  </div>
</template>
<script>
import { ref, reactive } from "@nuxtjs/composition-api";
export default {
  props: ["count"],
  setup(props, context) {
    const state = reactive({});
    const deletee = context.emit("deletee");
    return {
      deletee,
    };
  },
};
</script>
