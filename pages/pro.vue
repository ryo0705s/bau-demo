<template>
  <div>
    <div>{{ name }}fuga:{{ fuga }}hogo:{{ hogo }}</div>
    <p>parent_num: {{ parent_num }}</p>
    <!-- <Child @my-click="parent_num = $event" /> -->
    <Child @my-click="reflectNum" />
  </div>
</template>

<script>
import Child from "./index.vue";
export default {
  component: {
    Child,
  },
  props: ["name", "fuga", "hogo"],
  // props: {
  //   title: name,
  // },
  methods(value) {
    this.reflectNum = value;
  },
  data() {
    return {
      parent_num: 100,
    };
  },
};
</script>
