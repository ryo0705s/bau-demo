<template>
  <div>
    <div>
      {{ name }}
    </div>
    <p>parent_num: {{ parent_num }}</p>
    <Child @my-click="parent_num = $event" />
  </div>
</template>

<script>
import Child from "./index.vue";
export default {
  component: {
    Child,
  },
  props: {
    title: Fuga,
  },
};
</script>
