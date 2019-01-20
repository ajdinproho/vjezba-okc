const store = {
  state: {
    notes: [],
  },
  actions: {
    addNote({ commit }, note) {
      commit('dodavanje_biljeske', note);
    },
  },
  mutations: {
    dodavanje_biljeske(state, note) {
      state.notes.push(note);
    },
  },
  getters: {
    notes: state => state.notes,
  },
};
export default store;
