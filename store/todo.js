export const state = () => {
  list: [];
};
export const getters = {
  getList(state) {
    return state.list;
  },
};
export const mutations = {
  add(state, text) {
    state.list.push({ text, done: false });
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};

export const actions = {
  setList(vuexContext, text) {
    vuexContext.commit("add", text);
  },
  toggle(vuexContext, event) {
    vuexContext.commit("toggle", event);
  },
  remove(vuexContext, todo) {
    vuexContext.commit("remove", todo);
  },
};
