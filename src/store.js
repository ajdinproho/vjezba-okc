const store = {
  state: {
    notes: [],
  },
  actions: {
    addNote({ commit }, note) {
      commit('dodavanje_biljeske', note);
    },
    removeMethod({ commit }, index) {
      commit('brisanje_biljeske', index);
    },
  },
  mutations: {
    dodavanje_biljeske(state, note) {
      state.notes.push(note);
    },
    brisanje_biljeske(state, index) {
      state.notes.splice(index, 1);
    },
  },
  getters: {
    notes: state => state.notes,
  },
};
export default store;
