<template>
  <div>
    <h1>TODOLIST</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">remove</button>
      </li>
      <li>
        <input @keyup.enter="addTodo" placeholder="What needs to be done?" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      // return this.$store.state.todo.list;
      return this.$store.getters["todo/getList"];
    },
  },
  methods: {
    addTodo(e) {
      // this.$store.commit("todo/add", e.target.value);
      this.$store.dispatch("todo/add", e.target.value);
      e.target.value = 0;
    },
    // ...mapMutations({
    //   toggle: "todo/toggle",
    // }),
    toggle(e) {
      this.$store.dispatch("todo/toggle", e);
    },
    removeTodo(todo) {
      // this.$store.commit("todo/remove", todo);
      this.$store.dispatch("todo/remove", todo);
    },
  },
};
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
