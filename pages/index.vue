<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <div id="app"> -->
    <Fuga name="aho" />
    <!-- </div> -->
    <input type="text" v-model="data.member" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(m, index) in data.members" :key="index">{{ m }}</li>
    </ul>
    <ul>
      <li v-for="u in data.users" :key="u.id">{{ u.id }} {{ u.name }}</li>
    </ul>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import { watch } from 'less'
import Fuga from './pro.vue'
export default defineComponent({
  // name: "app",
  components: {
    Fuga,
  },
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
      ],
      members:[],
      member:""
    })
    const title = ref("タイトル")

    setTimeout(() => {
      data.users.push({ id: 4, name: '新藤誠' })
      title.value = "タイトルが変更できること"
    }, 1000);
    const add = () => {
      console.log("ddd")
      data.members.push(data.member)
      data.member = ""
    }
    watch
    return {
      data,
      title,
      add
    }
  },
})
</script>
