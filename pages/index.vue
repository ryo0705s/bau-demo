<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <div id="app"> -->
    <Child name="aho" />
    <Child :fuga="sss" :hogo="fff" />
    <!-- </div> -->
    <input type="text" v-model="data.member" />
    <button @click="add">追加</button>
    <p>child_num: {{ child_num }}</p>
    <button @click="child">親に値を渡す</button>
    <ul>
      <li v-for="(m, index) in data.members" :key="index">{{ m }}</li>
    </ul>
    <ul>
      <li v-for="u in data.users" :key="u.id">{{ u.id }} {{ u.name }}</li>
    </ul>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, ref} from '@nuxtjs/composition-api'
import Child from './pro.vue'
export default defineComponent({
  // name: "app",
  components: {
    Child,
  },
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
      ],
      members:[],
      member:"",
      child_num: 0
    })
    const title = ref("タイトル")
    const sss = ref("aaa")
    const fff = ref("bbb")

    setTimeout(() => {
      data.users.push({ id: 4, name: '新藤誠' })
      title.value = "タイトルが変更できること"
    }, 1000);
    const add = () => {
      // console.log("ddd")
      data.members.push(data.member)
      data.member = ""
    }
    const child = () => {
      state.$emit("my-click",state.child_num)
    }
    return {
      data,
      title,
      add,
      child
    }
      // watch: {
      //   data.members (newVal, oldVal) {
      //     console.log(newVal, oldVal)
      //   }
      // }
  },
})
</script>
