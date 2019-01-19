const store = {
  state: {
    notes: [],
  },
  actions: {
    addNote({ commit }, note) {
      commit('ADDING_NOTE', note);
    },
  },
  mutations: {
    ADDING_NOTE(state, note) {
      state.notes.push(note);
    },
  },
  getters: {
    notes: state => state.notes,
  },
};
export default store;
