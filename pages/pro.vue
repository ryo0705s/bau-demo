<template>
  <div>
    <div>{{ name }}</div>
    <!-- <Child @my-click="parent_num = $event" /> -->
  </div>
</template>

<script>
export default {
  // component: {
  //   Child,
  // },
  // props: ["name", "fuga", "hogo"],
  props: {
    title: name,
  },

  data() {
    return {
      parent_num: 100,
    };
  },
};
</script>
