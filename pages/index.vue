<template>
  <div>
    <Countt @countee="countRef" />
    <!-- <button @ccount=""></button> -->
  </div>
</template>
<script>
import { ref, defineComponent } from "@nuxtjs/composition-api";
import Countt from "./next.vue";
export default defineComponent({
  components: {
    Countt,
  },
  setup() {
    const countRef = ref(1);
    return {
      countRef,
    };
  },
});
</script>
