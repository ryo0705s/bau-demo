<template>
  <div>
    <a href="./">"前ページ"</a>
    <p>parent_num : {{ this.parent_num }}</p>
    <Child @my-click="parent_num = $event" />
    <!-- <Child @my-click="reflect_num" /> -->
  </div>
</template>
<script>
import Child from "./index.vue";
export default {
  component: {
    Child,
  },
  // methods(value) {
  //   this.reflect_num = "value";
  // },
  data() {
    return {
      parent_num: 100,
    };
  },
};
</script>
