<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ pro }}</h2>
    <input type="text" v-model="data.member" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(m, index) in data.members" :key="index">{{ m }}</li>
    </ul>
    <ul>
      <li v-for="u in data.users" :key="u.id">{{ u.id }} {{ u.name }}</li>
    </ul>
    <!-- <a href="./next">"次ページ"</a> -->
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, ref} from '@nuxtjs/composition-api'
export default defineComponent({
  props:["pro"],
  setup(props,context) {
    console.log("何が出る")
    const data = reactive({
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
      ],
      members:[],
      member:"",
    })
    const title = ref("タイトル")
    setTimeout(() => {
      data.users.push({ id: 4, name: '新藤誠' })
      title.value = "タイトルが変更できること"
    }, 1000);
    const add = () => {
      data.members.push(data.member)
      data.member = ""
    }
    return {
      data,
      title,
      add,
    }
  },
})
</script>
