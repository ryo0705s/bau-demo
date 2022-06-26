<template>
  <div>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <button @click="countNumber"></button>
  </div>
</template>
<script>
import { defineComponent, computed } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  setup(props, context) {
    // const count = computed(()=>{
    //   return count
    // })
    const doubleCount = computed(() => {
      return props.count * 2;
    });
    const countNumber = () => {
      context.emit("countee", props.count + 1);
    };
    return {
      doubleCount,
      countNumber,
    };
  },
});
</script>
