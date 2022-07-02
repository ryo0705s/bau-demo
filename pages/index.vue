<template>
  <div class="container">
    <div>
      <div class="container-wrap">
        <input type="number" v-model="theValue" />
        <p>{{ $store.getters.double }}</p>
        <button @click="addCount">足す</button>
        <button @click="timerCount">1秒後に足す</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      value: null,
    };
  },
  computed: {
    theValue: {
      get() {
        this.$store.state.count;
      },
      set() {
        this.$store.dispatch("timerCount");
      },
    },
  },
  methods: {
    addCount: function () {
      this.$store.commit("addCount");
    },
    timerCount: function () {
      this.$store.dispatch("timerCount");
    },
  },
});
</script>
<style>
.container {
  margin: 0 auto;
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.content-wrap {
  width: 400px;
  margin-bottom: 6%;
}

.el-progress {
  margin-bottom: 1em;
}
</style>
