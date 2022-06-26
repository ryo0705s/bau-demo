<template>
  <div>
    <!-- <Pro count="0" /> -->
    <Pro :count="state.kazoeru" />
    <!-- <div>{{state.kazoeru}}</div> -->
    <button @click="add">増やす</button>
    <!-- <div>{{ state.text }}</div> -->
    <input v-model="text" />
    <button :text="textee" @deletee="erase">消す</button>
  </div>
</template>
<script>
import { ref, reactive } from "@nuxtjs/composition-api";
import Pro from "./pro.vue";
export default {
  components: {
    Pro,
  },
  setup() {
    const state = reactive({
      kazoeru: 0,
    });
    const add = () => {
      state.kazoeru++;
      console.log(state.kazoeru);
    };
    const erase = () => {
      textee.value = "";
    };
    return {
      state,
      add,
      erase,
    };
  },
};
</script>
