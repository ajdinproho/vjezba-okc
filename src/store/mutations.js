import types from './mutations-types';

export default {
  [types.dodavanje_biljeske](state, note) {
    state.notes.push(note);
  },
  [types.brisanje_biljeske](state, index) {
    state.notes.splice(index, 1);
  },
};
