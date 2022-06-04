<template>
  <div>
    <div>test</div>
    <input v-model="state.todo" />
    <button @click="add">追加</button>
    <ul>
      <li v-for="(hoge, index) in state.todos" :key="index">
        <span v-show="!state.editFlag">{{ hoge }}</span>
        <span v-show="state.editFlag">
          <input v-model="state.editTodo" />
          <button @click="edited(index)">更新</button>
        </span>
        <span v-show="!state.editFlag">
          <button @click="erase(index)">削除</button>
          <button @click="edit(index)">編集</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive } from "@nuxtjs/composition-api";

export default defineComponent({
  setUp() {
    const state = reactive({
      todo: "",
      todos: [""],
      editFlag: false,
      newHoge: "",
    });
    // data() {
    //   return {
    //     todo: "",
    //     todos: [],
    //     editFlag: false,
    //     newHoge: "",
    //   };
    // },
    const add = () => {
      state.todos.push(state.todo);
      state.todo = "";
      console.log("state.todos");
    };
    const erase = (index) => {
      state.todos.splice(index, 1);
      console.log(index, state.todos);
    };
    const edit = (index) => {
      state.editFlag = true;
      state.editTodo = state.todos[index];
      state.newHoge = state.editTodo;
    };
    const edited = (index) => {
      state.editFlag = false;
      state.todos.splice(index, 1, state.editTodo);
    };

    // methods: {
    //   add() {
    //     this.todos.push(this.todo);
    //     this.todo = "";
    //   },
    //   erase(index) {
    //     this.todos.splice(index, 1);
    //     console.log(index, this.todos);
    //   },
    //   edit(index) {
    //     this.editFlag = true;
    //     this.editTodo = this.todos[index];
    //     this.newHoge = this.editTodo;
    //   },
    //   edited(index) {
    //     this.editFlag = false;
    //     this.todos.splice(index, 1, this.editTodo);
    //   },
    // },
    return {
      state,
      add,
      erase,
      edit,
      edited,
    };
  },
});
</script>
<style scoped>
li {
  list-style: none;
}
</style>
